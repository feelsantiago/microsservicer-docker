import { Injectable, Type } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy } from '@nestjs/microservices';
import { Logger, LoggerInstance } from 'feel-logger';
import { LoggerServiceOptions } from './logger.service.options';
import { LoggerServiceTransport } from './logger.service.transport';

@Injectable()
export class LoggerProvider {
    private readonly service: ClientProxy;

    constructor() {
        this.service = ClientProxyFactory.create(LoggerServiceOptions);
        Logger.init({ file: false, transports: [new LoggerServiceTransport({ client: this.service })] });
    }

    public createLoggerInstance<T>(context: Type<T>): LoggerInstance<T> {
        return Logger.createLoggerInstance(context);
    }
}
