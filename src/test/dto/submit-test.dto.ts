import {
  IsString,
  IsNumber,
  IsArray,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TestAnswerDto {
  @IsString()
  @IsNotEmpty()
  questionId!: string;

  @IsNotEmpty()
  answer!: string | number | string[];

  @IsNumber()
  @IsNotEmpty()
  timeSpent!: number;
}

export class SubmitTestDto {
  @IsString()
  @IsNotEmpty()
  childId!: string;

  @IsString()
  @IsNotEmpty()
  testType!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestAnswerDto)
  answers!: TestAnswerDto[];

  @IsNumber()
  @IsNotEmpty()
  totalTimeSpent!: number;
}
