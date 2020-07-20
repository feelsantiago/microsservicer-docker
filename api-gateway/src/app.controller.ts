import { Controller, Get } from '@nestjs/common';
import { LoggerInstance } from 'feel-logger';
import { LoggerProvider } from './logger/logger.provider';

@Controller()
export class AppController {
    private readonly logger: LoggerInstance<AppController>;

    constructor(loggerProvider: LoggerProvider) {
        this.logger = loggerProvider.createLoggerInstance(AppController);
    }

    @Get()
    public log(): string {
        this.logger.info('Incoming Request', { user: 'filipe', email: 'test@email.com' }, 'detalhes', { a: 1 });
        return 'received';
    }
}
