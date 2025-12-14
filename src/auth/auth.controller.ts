import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUserDto } from '../users/dto/create-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { CreateChildDto } from '../users/dto/create-child.dto.js';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: LoginDto) {
        return this.authService.login(signInDto.phoneNumber, signInDto.password);
    }

    @Post('signup')
    signUp(@Body() signUpDto: CreateUserDto) {
        return this.authService.register(signUpDto);
    }

    @Post("signup/child")
    registerChild(@Body() createChildDto: CreateChildDto) {
        return this.authService.registerChild(createChildDto);
    }
}
