import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateDenverQuestionDto } from './dto/create-denver-question.dto.js';
import { ImportCsvResultDto } from './dto/import-csv.dto.js';
import { Readable } from 'stream';
import csv from 'csv-parser';

@Injectable()
export class DenverQuestionsService {
    constructor(private prisma: PrismaService) { }

    /**
     * Import Denver questions from CSV content
     */
    async importFromCsv(csvContent: string): Promise<ImportCsvResultDto> {
        const questions: CreateDenverQuestionDto[] = [];
        const errors: string[] = [];
        let lineNumber = 1; // Start at 1 for header

        return new Promise((resolve) => {
            const stream = Readable.from(csvContent);

            stream
                .pipe(csv())
                .on('data', (row) => {
                    lineNumber++;
                    try {
                        const question = this.parseCsvRow(row, lineNumber);
                        questions.push(question);
                    } catch (error) {
                        const message = error instanceof Error ? error.message : String(error);
                        errors.push(`Line ${lineNumber}: ${message}`);
                    }
                })
                .on('end', async () => {
                    let imported = 0;
                    let failed = 0;

                    // Bulk insert with transaction
                    try {
                        await this.prisma.$transaction(async (tx) => {
                            for (const question of questions) {
                                try {
                                    await tx.denverQuestion.create({
                                        data: {
                                            questionId: question.questionId,
                                            text: question.text,
                                            ageMonthMin: question.ageMonthMin,
                                            ageMonthMax: question.ageMonthMax,
                                            category: question.category,
                                            type: question.type,
                                            options: question.options || undefined,
                                            minCorrect: question.minCorrect || undefined,
                                            audio: question.audio || undefined,
                                        },
                                    });
                                    imported++;
                                } catch (error) {
                                    failed++;
                                    const message = error instanceof Error ? error.message : String(error);
                                    errors.push(
                                        `Failed to insert ${question.questionId}: ${message}`,
                                    );
                                }
                            }
                        });
                    } catch (error) {
                        const message = error instanceof Error ? error.message : String(error);
                        errors.push(`Transaction failed: ${message}`);
                    }

                    resolve({
                        success: errors.length === 0,
                        imported,
                        failed,
                        errors,
                    });
                })
                .on('error', (error) => {
                    errors.push(`CSV parsing error: ${error.message}`);
                    resolve({
                        success: false,
                        imported: 0,
                        failed: questions.length,
                        errors,
                    });
                });
        });
    }

    /**
     * Parse a single CSV row into a CreateDenverQuestionDto
     */
    private parseCsvRow(
        row: any,
        lineNumber: number,
    ): CreateDenverQuestionDto {
        // Validate required fields
        if (!row.questionId || !row.text) {
            throw new Error('Missing required fields: questionId or text');
        }

        const dto: CreateDenverQuestionDto = {
            questionId: row.questionId.trim(),
            text: row.text.trim(),
            ageMonthMin: parseInt(row.ageMonthMin, 10),
            ageMonthMax: parseInt(row.ageMonthMax, 10),
            category: row.category.trim(),
            type: row.type.trim(),
        };

        // Validate age ranges
        if (isNaN(dto.ageMonthMin) || isNaN(dto.ageMonthMax)) {
            throw new Error('Invalid age range values');
        }

        if (dto.ageMonthMin > dto.ageMonthMax) {
            throw new Error('ageMonthMin cannot be greater than ageMonthMax');
        }

        // Parse options if present (JSON array format)
        if (row.options && row.options.trim()) {
            try {
                dto.options = JSON.parse(row.options);
                if (!Array.isArray(dto.options)) {
                    throw new Error('Options must be an array');
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                throw new Error(`Invalid options JSON: ${message}`);
            }
        }

        // Parse minCorrect if present
        if (row.minCorrect && row.minCorrect.trim()) {
            dto.minCorrect = parseInt(row.minCorrect, 10);
            if (isNaN(dto.minCorrect)) {
                throw new Error('Invalid minCorrect value');
            }
        }

        // Parse audio if present
        if (row.audio && row.audio.trim()) {
            dto.audio = row.audio.trim();
        }

        return dto;
    }

    /**
     * Get all questions
     */
    async findAll() {
        return this.prisma.denverQuestion.findMany({
            orderBy: [{ ageMonthMin: 'asc' }, { questionId: 'asc' }],
        });
    }

    /**
     * Get questions for a specific age range
     */
    async findByAgeRange(ageMonths: number) {
        return this.prisma.denverQuestion.findMany({
            where: {
                ageMonthMin: { lte: ageMonths },
                ageMonthMax: { gte: ageMonths },
            },
            orderBy: [{ ageMonthMin: 'asc' }, { questionId: 'asc' }],
        });
    }

    /**
     * Get questions by category
     */
    async findByCategory(category: string) {
        return this.prisma.denverQuestion.findMany({
            where: { category },
            orderBy: [{ ageMonthMin: 'asc' }, { questionId: 'asc' }],
        });
    }

    /**
     * Get questions by type
     */
    async findByType(type: string) {
        return this.prisma.denverQuestion.findMany({
            where: { type },
            orderBy: [{ ageMonthMin: 'asc' }, { questionId: 'asc' }],
        });
    }

    /**
     * Get a single question by ID
     */
    async findById(id: string) {
        return this.prisma.denverQuestion.findUnique({
            where: { id },
        });
    }

    /**
     * Get a single question by questionId
     */
    async findByQuestionId(questionId: string) {
        return this.prisma.denverQuestion.findUnique({
            where: { questionId },
        });
    }

    /**
     * Delete all questions (for re-importing)
     */
    async deleteAll() {
        return this.prisma.denverQuestion.deleteMany();
    }

    /**
     * Get count of questions
     */
    async count() {
        return this.prisma.denverQuestion.count();
    }
}
