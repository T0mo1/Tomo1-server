import { Injectable } from '@nestjs/common';
import { Parent, Child } from '@/generated/prisma/client.js';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto.js';
import { CreateChildDto } from './dto/create-child.dto.js';
import { PrismaService } from '../database/prisma.service.js';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    async findOne(username: string): Promise<Parent | null> {
        return this.prisma.parent.findUnique({ where: { phoneNumber: username } });
    }

    async createUser(data: CreateUserDto): Promise<Parent> {
        const hashedPassword = await bcrypt.hash(data.password, 12);
        return this.prisma.parent.create({
            data: {
                phoneNumber: data.phoneNumber,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
            },
        });
    }

    async createChild(data: CreateChildDto): Promise<Child> {
         return this.prisma.child.create({
            data: {
                parentId: data.parentId,
                dob: new Date(data.dob),
                firstName: data.firstName,
                lastName: data.lastName,
            },
        });
    }
}