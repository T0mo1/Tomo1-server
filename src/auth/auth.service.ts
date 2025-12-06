import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto.js';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async register(userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    async login(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);

        if (!user || !(await bcrypt.compare(pass, user.password))) {
            throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        const payload = { username: email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
