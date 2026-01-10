import { IsString, MinLength, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class RegisterDto {
    // Parent fields
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    // Child fields
    @IsString()
    @IsNotEmpty()
    childFirstName!: string;

    @IsString()
    @IsOptional()
    childLastName?: string;

    @IsDateString()
    childDob!: string;
}
