import { IsString, IsNotEmpty} from 'class-validator';

export class CreateChildDto {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsNotEmpty()
    dob!: Date;

    @IsString()
    @IsNotEmpty()
    parentId!: string;
}