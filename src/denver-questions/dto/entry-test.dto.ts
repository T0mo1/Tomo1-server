import { IsArray, IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class StartTestDto {
    @IsNotEmpty()
    @IsDateString()
    dob!: string; // ISO Date string

    @IsOptional()
    @IsString()
    childId?: string;
}

export class AnswerDto {
    @IsString()
    questionId!: string;

    @IsNotEmpty()
    value!: any; // Can be boolean, string[], number, etc. depending on question type
}

export class SubmitTestDto {
    @IsNotEmpty()
    @IsDateString()
    dob!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    answers!: AnswerDto[];
}

export class QuestionResultDto {
    questionId!: string;
    result!: 'D' | 'K'; // D = Pass, K = Fail
    rawAnswer: any;
}

export class TestResultDto {
    childAge!: {
        years: number;
        months: number;
        days: number;
        totalMonths: number;
    };
    mentalAge!: {
        years: number;
        months: number;
        days: number;
        totalMonths: number;
    };
    ageRange!: string;
    results!: QuestionResultDto[];
    stoppingPoint?: {
        questionId: string;
        text: string;
        mentalAgeMonths: number;
    };
    summary!: {
        totalQuestions: number;
        passed: number;
        failed: number;
        isAdvanced?: boolean; // Just a placeholder for "mental-age logic" aggregation
    };
}
