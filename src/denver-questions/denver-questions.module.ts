import { Module } from '@nestjs/common';
import { DenverQuestionsController } from './denver-questions.controller.js';
import { DenverQuestionsService } from './denver-questions.service.js';
import { DatabaseModule } from '../database/database.module.js';

@Module({
    imports: [DatabaseModule],
    controllers: [DenverQuestionsController],
    providers: [DenverQuestionsService],
    exports: [DenverQuestionsService],
})
export class DenverQuestionsModule { }
