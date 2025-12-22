import "dotenv/config";
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "../generated/prisma/index.js";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(private configService: ConfigService) {
        const connectionString = configService.get<string>('DATABASE_URL');
        const adapter = new PrismaPg({ connectionString });
        super({ adapter });
    }

    async onModuleInit() {
        try {
            await this.$connect();
        } catch (error) {
            console.error('Failed to connect to the database:', error);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
