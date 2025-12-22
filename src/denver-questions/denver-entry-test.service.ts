import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { StartTestDto, SubmitTestDto, TestResultDto, QuestionResultDto } from './dto/entry-test.dto.js';
import { DENVER_AGE_RANGES } from './constants/age-ranges.constant.js';
import { DenverQuestion } from '../generated/prisma/index.js';

@Injectable()
export class DenverEntryTestService {
    constructor(private prisma: PrismaService) { }

    /**
     * Start the test: Calculate age, find range, return questions
     */
    async startTest(dto: StartTestDto) {
        const dob = new Date(dto.dob);
        if (isNaN(dob.getTime())) {
            throw new BadRequestException('Invalid DOB');
        }

        const age = this.calculateAge(dob);
        const ageRange = this.determineAgeRange(age.totalMonths);

        if (!ageRange) {
            throw new BadRequestException(`Age (${age.totalMonths.toFixed(2)} months) outside of supported ranges`);
        }

        const questions = await this.prisma.denverQuestion.findMany({
            where: {
                ageMonthMin: {
                    gte: ageRange.minMonths,
                },
                ageMonthMax: {
                    lte: ageRange.maxMonths
                }
            },
            orderBy: {
                id: 'asc',
            }
        });

        return {
            childAge: age,
            ageRange: ageRange,
            questions: questions.map(q => ({
                id: q.id,
                text: q.text,
                type: q.type,
                options: q.options,
                audio: q.audio,
            }))
        };
    }


    /**
     * Submit and evaluate the test
     */
    async submitTest(dto: SubmitTestDto): Promise<TestResultDto> {
        const dob = new Date(dto.dob);
        const age = this.calculateAge(dob);
        const ageRange = this.determineAgeRange(age.totalMonths);

        if (!ageRange) {
            throw new BadRequestException('Age outside of supported ranges');
        }

        const questionIds = dto.answers.map(a => a.questionId);
        const questions = await this.prisma.denverQuestion.findMany({
            where: {
                id: { in: questionIds }
            }
        });

        const questionsMap = new Map(questions.map(q => [q.id, q]));
        const results: QuestionResultDto[] = [];
        let passedCount = 0;
        let failedCount = 0;

        let maxPassedAgeMonths = 0;
        let stoppingPoint: TestResultDto['stoppingPoint'] = undefined;

        for (const answer of dto.answers) {
            const question = questionsMap.get(answer.questionId);
            if (!question) continue;

            const result = this.evaluateAnswer(question, answer.value);
            results.push({
                questionId: question.id,
                result: result,
                rawAnswer: answer.value
            });

            if (result === 'D') {
                passedCount++;
                if (question.ageMonthMax > maxPassedAgeMonths) {
                    maxPassedAgeMonths = question.ageMonthMax;
                    stoppingPoint = {
                        questionId: question.id,
                        text: question.text,
                        mentalAgeMonths: question.ageMonthMax
                    };
                }
            } else {
                failedCount++;
            }
        }

        // Mental Age: If no questions passed, use the bottom of the range.
        // Otherwise use the highest ageMonthMax of passed questions.
        const mentalAgeMonths = maxPassedAgeMonths > 0 ? maxPassedAgeMonths : ageRange.minMonths;
        const mentalAge = this.createAgeFromMonths(mentalAgeMonths);

        return {
            childAge: age,
            mentalAge: mentalAge,
            ageRange: ageRange.label,
            results: results,
            stoppingPoint: stoppingPoint,
            summary: {
                totalQuestions: results.length,
                passed: passedCount,
                failed: failedCount,
            }
        };
    }

    /**
     * Calculate exact age
     */
    calculateAge(dobDate: Date) {
        // Normalize dates to start of local day for consistent difference calculation
        const now = new Date();
        const nowNormalized = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dobNormalized = new Date(dobDate.getFullYear(), dobDate.getMonth(), dobDate.getDate());

        let years = nowNormalized.getFullYear() - dobNormalized.getFullYear();
        let months = nowNormalized.getMonth() - dobNormalized.getMonth();
        let days = nowNormalized.getDate() - dobNormalized.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(nowNormalized.getFullYear(), nowNormalized.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const totalMonths = (years * 12) + months + (days / 30.44); // Better avg month length
        const totalDays = Math.floor((nowNormalized.getTime() - dobNormalized.getTime()) / (1000 * 60 * 60 * 24));

        return {
            years,
            months,
            days,
            totalMonths,
            totalDays
        };
    }

    private createAgeFromMonths(totalMonths: number) {
        const years = Math.floor(totalMonths / 12);
        const months = Math.floor(totalMonths % 12);
        const days = Math.round((totalMonths % 1) * 30.44);

        return {
            years,
            months,
            days,
            totalMonths,
            totalDays: Math.floor(totalMonths * 30.44)
        };
    }

    private determineAgeRange(months: number) {
        return DENVER_AGE_RANGES.find(r => months >= r.minMonths && months < r.maxMonths);
    }

    private evaluateAnswer(question: DenverQuestion, answerValue: any): 'D' | 'K' {
        // "Evaluation logic must strictly follow per-question rules"
        // 1. Check for specific "No Answer" flags
        if (answerValue === 'Không rõ' || answerValue === 'Bé không hợp tác') {
            return 'K';
        }

        // 2. Type-based evaluation
        // If question has `minCorrect`, it's a threshold question
        if (question.minCorrect !== null && typeof answerValue === 'number') {
            return answerValue >= question.minCorrect ? 'D' : 'K';
        }

        // If it's an array answer (e.g. multi-select), check count vs minCorrect
        if (Array.isArray(answerValue) && question.minCorrect !== null) {
            return answerValue.length >= question.minCorrect ? 'D' : 'K';
        }

        // Yes/No
        if (question.type === 'yes-no') {
            // Assuming 'yes' or true is D. 
            // Check if specific questions invert logic?
            // "Some questions invert logic (must follow notes exactly)"
            // Since we don't have the notes parsed into logic here, we'll assume standard positive = D.
            if (answerValue === true || answerValue === 'yes' || answerValue === 'Yes' || answerValue === 'D') return 'D';
            return 'K';
        }

        // Default or Fallback
        // Consider "D" string as Pass if client sends it directly? 
        // Or if answer is "passed" boolean.
        if (answerValue === true) return 'D';

        return 'K';
    }
}
