import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { TestService } from './test.service.js';
import { SubmitTestDto } from './dto/submit-test.dto.js';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard.js';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @UseGuards(JwtAuthGuard)
  @Post('submit')
  async submitTest(@Body() submitTestDto: SubmitTestDto) {
    return this.testService.submitTest(submitTestDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('results/:childId')
  async getTestResults(@Param('childId') childId: string) {
    return this.testService.getTestResults(childId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':testId')
  async getTestResult(@Param('testId') testId: string) {
    return this.testService.getTestResult(testId);
  }
}
