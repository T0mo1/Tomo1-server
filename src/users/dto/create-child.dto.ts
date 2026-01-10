import { IsString, IsNotEmpty, IsOptional} from 'class-validator';

export class CreateChildDto {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsNotEmpty()
    dob!: Date;

    @IsString()
    @IsNotEmpty()
    parentId!: string;
}