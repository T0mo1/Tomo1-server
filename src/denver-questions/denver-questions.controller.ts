import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Query,
    UploadedFile,
    UseInterceptors,
    BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DenverQuestionsService } from './denver-questions.service.js';

@Controller('denver-questions')
export class DenverQuestionsController {
    constructor(private readonly denverQuestionsService: DenverQuestionsService) { }

    /**
     * Import questions from CSV file
     */
    @Post('import')
    @UseInterceptors(FileInterceptor('file'))
    async importCsv(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        if (!file.originalname.endsWith('.csv')) {
            throw new BadRequestException('File must be a CSV');
        }

        const csvContent = file.buffer.toString('utf-8');
        return this.denverQuestionsService.importFromCsv(csvContent);
    }

    /**
     * Import questions from CSV text (alternative endpoint)
     */
    @Post('import-text')
    async importCsvText(@Query('csv') csvContent: string) {
        if (!csvContent) {
            throw new BadRequestException('No CSV content provided');
        }
        return this.denverQuestionsService.importFromCsv(csvContent);
    }

    /**
     * Get all questions
     */
    @Get()
    async findAll(
        @Query('ageMonths') ageMonths?: string,
        @Query('category') category?: string,
        @Query('type') type?: string,
    ) {
        if (ageMonths) {
            const age = parseInt(ageMonths, 10);
            if (isNaN(age)) {
                throw new BadRequestException('Invalid ageMonths parameter');
            }
            return this.denverQuestionsService.findByAgeRange(age);
        }

        if (category) {
            return this.denverQuestionsService.findByCategory(category);
        }

        if (type) {
            return this.denverQuestionsService.findByType(type);
        }

        return this.denverQuestionsService.findAll();
    }
    
    /**
     * Get questions for specific age
     */
    @Get('age/:months')
    async findByAge(@Param('months') months: string) {
        const age = parseInt(months, 10);
        if (isNaN(age)) {
            throw new BadRequestException('Invalid age parameter');
        }
        return this.denverQuestionsService.findByAgeRange(age);
    }

    /**
     * Get question by questionId
     */
    @Get('question/:questionId')
    async findByQuestionId(@Param('questionId') questionId: string) {
        const question =
            await this.denverQuestionsService.findByQuestionId(questionId);
        if (!question) {
            throw new BadRequestException('Question not found');
        }
        return question;
    }

    /**
     * Get question by ID
     */
    @Get(':id')
    async findById(@Param('id') id: string) {
        const question = await this.denverQuestionsService.findById(id);
        if (!question) {
            throw new BadRequestException('Question not found');
        }
        return question;
    }

    /**
     * Get question count
     */
    @Get('stats/count')
    async getCount() {
        const count = await this.denverQuestionsService.count();
        return { count };
    }

    /**
     * Delete all questions
     */
    @Delete()
    async deleteAll() {
        await this.denverQuestionsService.deleteAll();
        return { message: 'All questions deleted successfully' };
    }
}
