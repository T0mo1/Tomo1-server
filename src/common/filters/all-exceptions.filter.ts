import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const message =
            exception instanceof HttpException
                ? exception.getResponse()
                : 'Internal server error';

        const errorResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: typeof message === 'string' ? message : (message as any).message || message,
        };

        const logMessage = `[${errorResponse.timestamp}] ${status} - ${errorResponse.message}\n${exception instanceof Error ? exception.stack : JSON.stringify(exception)}\n\n`;
        try {
            fs.appendFileSync(path.join(process.cwd(), 'error.log'), logMessage);
        } catch (err) {
            console.error('Failed to write to error.log', err);
        }

        console.error('Exception caught:', exception);

        response.status(status).json(errorResponse);
    }
}
