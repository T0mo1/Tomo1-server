import { Injectable } from '@nestjs/common';
import { User } from '../../generated/prisma/client.js';
import { PrismaService } from '../database/prisma.service.js';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    async findOne(username: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email: username } });
    }
}
