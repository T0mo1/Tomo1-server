import { Module } from '@nestjs/common';
import { DenverQuestionsController } from './denver-questions.controller.js';
import { DenverQuestionsService } from './denver-questions.service.js';
import { DenverEntryTestController } from './denver-entry-test.controller.js';
import { DenverEntryTestService } from './denver-entry-test.service.js';
import { DatabaseModule } from '../database/database.module.js';

@Module({
    imports: [DatabaseModule],
    controllers: [DenverQuestionsController, DenverEntryTestController],
    providers: [DenverQuestionsService, DenverEntryTestService],
    exports: [DenverQuestionsService, DenverEntryTestService],
})
export class DenverQuestionsModule { }
