import { IsString, IsInt, IsOptional, IsArray, IsIn, Min, IsNumber } from 'class-validator';

export class CreateDenverQuestionDto {
    @IsString()
    questionId!: string;

    @IsString()
    text!: string;

    @IsNumber()
    @Min(0)
    ageMonthMin!: number;

    @IsNumber()
    @Min(0)
    ageMonthMax!: number;

    @IsString()
    @IsIn(['receptive', 'expressive'])
    category!: string;

    @IsString()
    @IsIn(['yes-no', 'multiple'])
    type!: string;

    @IsArray()
    @IsOptional()
    options?: any[];

    @IsOptional()
    @IsInt()
    @Min(1)
    minCorrect?: number;

    @IsOptional()
    @IsString()
    audio?: string;
}
