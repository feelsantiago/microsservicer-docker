import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { LoggerModule } from './logger/logger.module';

@Module({
    imports: [LoggerModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
