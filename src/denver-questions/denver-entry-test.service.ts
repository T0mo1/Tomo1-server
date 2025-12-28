import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { StartTestDto, SubmitTestDto, TestResultDto, QuestionResultDto } from './dto/entry-test.dto.js';
import { DENVER_AGE_RANGES } from './constants/age-ranges.constant.js';
import { CLASSIFICATION, CLASSIFICATION_THRESHOLD_MONTHS, ClassificationType } from './constants/classification.constant.js';
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

        // Get all language domain questions
        const allQuestions = await this.prisma.denverQuestion.findMany({
            where: {
                // Filter for language domain items only (L_ prefix)
                id: {
                    startsWith: 'L_'
                }
            },
            orderBy: {
                ageMonthMax: 'desc', // Order by descending age (backward administration)
            }
        });

        // Find the "age line" - the right-most item crossed by child's age
        // This is the first item (highest age) where ageMonthMin <= childAge <= ageMonthMax
        const ageLineIndex = allQuestions.findIndex(q =>
            age.totalMonths >= q.ageMonthMin && age.totalMonths <= q.ageMonthMax
        );

        // Start from the age line item and include all items before it (higher ages)
        // This ensures we start from the right-most crossed item and go backward
        const questionsToAdminister = ageLineIndex >= 0
            ? allQuestions.slice(0, ageLineIndex + 10) // Include some items after age line for context
            : allQuestions.slice(0, 10); // Default to first 10 if no exact match

        return {
            childAge: age,
            ageRange: ageRange,
            questions: questionsToAdminister.map(q => ({
                id: q.id,
                text: q.text,
                type: q.type,
                options: q.options,
                audio: q.audio,
                ageMonthMin: q.ageMonthMin,
                ageMonthMax: q.ageMonthMax,
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
        const answerCache = new Map<string, any>(); // Cache for duplicate items
        const results: QuestionResultDto[] = [];
        let passedCount = 0;
        let failedCount = 0;
        let consecutivePasses = 0;
        const CONSECUTIVE_PASS_LIMIT = 3;

        let developmentalAgeMonths = 0;
        let thirdPassItem: DenverQuestion | null = null;
        let stoppingPoint: TestResultDto['stoppingPoint'] = undefined;

        // Process answers in order (should be backward/descending age order)
        for (const answer of dto.answers) {
            const question = questionsMap.get(answer.questionId);
            if (!question) continue;

            // Check for duplicate items and reuse answer
            let actualAnswer = answer.value;
            const duplicateAnswer = this.findDuplicateAnswer(question.text, answerCache);
            if (duplicateAnswer !== null) {
                actualAnswer = duplicateAnswer;
            } else {
                // Store answer for potential reuse
                answerCache.set(question.text, answer.value);
            }

            const result = this.evaluateAnswer(question, actualAnswer);
            results.push({
                questionId: question.id,
                result: result,
                rawAnswer: actualAnswer
            });

            if (result === 'D') {
                passedCount++;
                consecutivePasses++;

                // Track the 3rd consecutive pass for developmental age
                if (consecutivePasses === CONSECUTIVE_PASS_LIMIT) {
                    thirdPassItem = question;
                    developmentalAgeMonths = question.ageMonthMax;
                    stoppingPoint = {
                        questionId: question.id,
                        text: question.text,
                        mentalAgeMonths: question.ageMonthMax
                    };
                    // Stop immediately after 3rd consecutive pass
                    break;
                }
            } else {
                failedCount++;
                consecutivePasses = 0;
            }
        }

        // Developmental Age: Use the 3rd consecutive pass item's ageMonthMax
        // If no 3 consecutive passes, use the child's chronological age
        if (developmentalAgeMonths === 0) {
            developmentalAgeMonths = age.totalMonths;
        }
        const developmentalAge = this.createAgeFromMonths(developmentalAgeMonths);

        // Mental Age: Use highest passed item or range minimum
        const maxPassedAgeMonths = results
            .filter(r => r.result === 'D')
            .reduce((max, r) => {
                const q = questionsMap.get(r.questionId);
                return q && q.ageMonthMax > max ? q.ageMonthMax : max;
            }, 0);
        const mentalAgeMonths = maxPassedAgeMonths > 0 ? maxPassedAgeMonths : ageRange.minMonths;
        const mentalAge = this.createAgeFromMonths(mentalAgeMonths);

        // Classify development: Mầm/Chồi/Lá
        const classification = this.classifyDevelopment(developmentalAgeMonths, age.totalMonths);

        return {
            childAge: age,
            mentalAge: mentalAge,
            developmentalAge: developmentalAge,
            ageRange: ageRange.label,
            classification: classification,
            results: results,
            stoppingPoint: stoppingPoint,
            summary: {
                totalQuestions: results.length,
                passed: passedCount,
                failed: failedCount,
                consecutivePasses: consecutivePasses,
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

    /**
     * Find duplicate answer from cache by question text
     */
    private findDuplicateAnswer(questionText: string, answerCache: Map<string, any>): any | null {
        return answerCache.get(questionText) ?? null;
    }

    /**
     * Classify child development based on developmental age vs chronological age
     * Mầm (Bud): Delayed - developmental age < chronological age
     * Chồi (Sprout): Age-appropriate - developmental age ≈ chronological age
     * Lá (Leaf): Advanced - developmental age > chronological age
     */
    private classifyDevelopment(developmentalAgeMonths: number, chronologicalAgeMonths: number): ClassificationType {
        const difference = developmentalAgeMonths - chronologicalAgeMonths;

        if (difference < -CLASSIFICATION_THRESHOLD_MONTHS) {
            return CLASSIFICATION.MAM; // Delayed
        } else if (difference > CLASSIFICATION_THRESHOLD_MONTHS) {
            return CLASSIFICATION.LA; // Advanced
        } else {
            return CLASSIFICATION.CHOI; // Age-appropriate
        }
    }
}
