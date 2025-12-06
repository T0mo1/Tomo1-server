import { Injectable } from '@nestjs/common';
import { User } from '@/generated/prisma/client.js';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto.js';
import { PrismaService } from '../database/prisma.service.js';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    async findOne(username: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email: username } });
    }

    async createUser(data: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                dob: new Date(data.dob),
            },
        });
    }
}
