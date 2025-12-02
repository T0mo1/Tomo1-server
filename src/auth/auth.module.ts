import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';
import { LocalStrategy } from './local/local.strategy.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy.js';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        // JwtModule.registerAsync({
        //     inject: [ConfigService],
        //     useFactory: async (configService: ConfigService) => {
        //         const secret = configService.get<string>('JWT_SECRET');
        //         const expiresIn = configService.get<string>('JWT_EXPIRATION');

        //         return {
        //             secret: secret || 'default-secret-change-in-production',
        //             signOptions: {
        //                 expiresIn: expiresIn || '1h'
        //             },
        //         };
        //     },
        // }),
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }
