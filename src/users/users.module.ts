import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { PrismaClient } from 'generated/prisma/client.js';

@Module({
  providers: [UsersService, PrismaClient],
  exports: [UsersService]
})
export class UsersModule { }
