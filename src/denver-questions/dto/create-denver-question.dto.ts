import { IsString, IsInt, IsOptional, IsArray, IsIn, Min } from 'class-validator';

export class CreateDenverQuestionDto {
    @IsString()
    questionId!: string;

    @IsString()
    text!: string;

    @IsInt()
    @Min(0)
    ageMonthMin!: number;

    @IsInt()
    @Min(0)
    ageMonthMax!: number;

    @IsString()
    @IsIn(['receptive', 'expressive'])
    category!: string;

    @IsString()
    @IsIn(['yes-no', 'multiple'])
    type!: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    options?: string[];

    @IsOptional()
    @IsInt()
    @Min(1)
    minCorrect?: number;

    @IsOptional()
    @IsString()
    audio?: string;
}
