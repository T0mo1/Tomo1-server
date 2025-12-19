import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { SubmitTestDto, TestAnswerDto } from './dto/submit-test.dto.js';
import { TestResult } from '@/generated/prisma/client.js';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService) {}

  async submitTest(submitTestDto: SubmitTestDto): Promise<TestResult> {
    const { childId, testType, answers, totalTimeSpent } = submitTestDto;

    // Kiểm tra child có tồn tại không
    const child = await this.prisma.child.findUnique({
      where: { id: childId },
    });

    if (!child) {
      throw new BadRequestException('Child not found');
    }

    // Lưu tạm thời
    const score = answers.length;

    // Tạo test result
    const testResult = await this.prisma.testResult.create({
      data: {
        childId,
        testType,
        score,
        totalTimeSpent,
        answers: {
          create: answers.map((answer: TestAnswerDto) => ({
            questionId: answer.questionId,
            answer: JSON.stringify(answer.answer),
            timeSpent: answer.timeSpent,
          })),
        },
      },
      include: {
        answers: true,
      },
    });

    return testResult;
  }

  async getTestResults(childId: string): Promise<TestResult[]> {
    return this.prisma.testResult.findMany({
      where: { childId },
      include: {
        answers: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getTestResult(testId: string): Promise<TestResult | null> {
    return this.prisma.testResult.findUnique({
      where: { id: testId },
      include: {
        answers: true,
      },
    });
  }
}
