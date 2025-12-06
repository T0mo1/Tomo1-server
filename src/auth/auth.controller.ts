import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUserDto } from '../users/dto/create-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: LoginDto) {
        return this.authService.login(signInDto.email, signInDto.password);
    }

    @Post('signup')
    signUp(@Body() signUpDto: CreateUserDto) {
        return this.authService.register(signUpDto);
    }
}
