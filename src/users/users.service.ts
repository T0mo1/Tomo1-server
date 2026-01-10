import { Injectable, BadRequestException } from '@nestjs/common';
import { Parent, Child } from '../generated/prisma/index.js';
import * as bcrypt from 'bcrypt';
import { CreateChildDto } from './dto/create-child.dto.js';
import { PrismaService } from '../database/prisma.service.js';
import { RegisterDto } from '../auth/dto/register.dto.js';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    
    async findOne(username: string): Promise<Parent | null> {
        return this.prisma.parent.findUnique({ where: { phoneNumber: username } });
    }

    async findOneWithChildren(phoneNumber: string): Promise<(Parent & { children: Child[] }) | null> {
        return this.prisma.parent.findUnique({
            where: { phoneNumber },
            include: { children: true },
        });
    }

    async registerUserWithChild(data: RegisterDto): Promise<Parent & { children: Child[] }> {
        // Check if parent already exists
        const existingParent = await this.findOne(data.phoneNumber);
        if (existingParent) {
            throw new BadRequestException('Phone number already registered');
        }
        const hashedPassword = await bcrypt.hash(data.password, 12);

        // Create parent with child in a transaction
        const parent = await this.prisma.parent.create({
            data: {
                phoneNumber: data.phoneNumber,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                children: {
                    create: {
                        firstName: data.childFirstName,
                        ...(data.childLastName && { lastName: data.childLastName }),
                        dob: new Date(data.childDob),
                    },
                },
            },
            include: { children: true },
        });

        return parent;
    }

    async createChild(data: CreateChildDto): Promise<Child> {
        if (!data.firstName) {
            throw new BadRequestException('First name is required');
        }
        return this.prisma.child.create({
            data: {
                parentId: data.parentId,
                dob: new Date(data.dob),
                firstName: data.firstName,
                ...(data.lastName && { lastName: data.lastName }),
            },
        });
    }
}