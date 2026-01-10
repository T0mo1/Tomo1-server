import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateChildDto } from '../users/dto/create-child.dto.js';
import { RegisterDto } from './dto/register.dto.js';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) { }   

    async validateUser(phoneNumber: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(phoneNumber);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async register(registerDto: RegisterDto) {
        const parentWithChild = await this.usersService.registerUserWithChild(registerDto);
        const { password, ...result } = parentWithChild;
        
        return {
            user: {
                id: result.id,
                phoneNumber: result.phoneNumber,
                firstName: result.firstName,
                lastName: result.lastName,
            },
            children: result.children || [],
        };
    }

    async login(phoneNumber: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(phoneNumber);

        if (!user || !(await bcrypt.compare(pass, user.password))) {
            throw new UnauthorizedException();
        }
        
        // Fetch user with children
        const userWithChildren = await this.usersService.findOneWithChildren(phoneNumber);
        
        const { password, ...result } = userWithChildren!;
        const payload = { username: phoneNumber, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                phoneNumber: user.phoneNumber,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            children: userWithChildren!.children || [],
        };
    }

    async registerChild(createChildDto: CreateChildDto) {
        return this.usersService.createChild(createChildDto);
    }

    async getProfile(phoneNumber: string) {
        const userWithChildren = await this.usersService.findOneWithChildren(phoneNumber);
        if (!userWithChildren) {
            throw new UnauthorizedException();
        }
        const { password, ...result } = userWithChildren;
        return {
            user: {
                id: userWithChildren.id,
                phoneNumber: userWithChildren.phoneNumber,
                firstName: userWithChildren.firstName,
                lastName: userWithChildren.lastName,
            },
            children: userWithChildren.children || [],
        };
    }
}