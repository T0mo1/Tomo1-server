import { z } from 'zod';

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().default('3000'),
    DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
    JWT_SECRET: z.string().min(1, 'JWT_SECRET is required'),
    JWT_EXPIRATION: z.string().default('1h'),
});

export type EnvConfig = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): EnvConfig {
    const result = envSchema.safeParse(config);

    if (!result.success) {
        const errors = result.error.issues.map(err => `${err.path.join('.')}: ${err.message}`);
        throw new Error(`Environment validation failed:\n${errors.join('\n')}`);
    }

    return result.data;
}
