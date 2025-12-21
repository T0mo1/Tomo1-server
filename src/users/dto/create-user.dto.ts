import { IsString, MinLength, IsNotEmpty} from 'class-validator';

export class CreateUserDto {
    @IsString()
    phoneNumber!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;
}