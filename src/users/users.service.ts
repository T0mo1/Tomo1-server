import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma/client.js';
import { PrismaClient } from 'generated/prisma/client.js';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaClient) { }
    async findOne(username: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email: username } });
    }
}
