import { Module } from '@nestjs/common';
import { TestController } from './test.controller.js';
import { TestService } from './test.service.js';
import { DatabaseModule } from '../database/database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
