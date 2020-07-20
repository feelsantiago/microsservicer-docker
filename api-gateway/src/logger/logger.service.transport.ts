import Transport from 'winston-transport';
import { ClientProxy } from '@nestjs/microservices';

export interface TransportInfo {
    level: string;
    message: string;
    timestamp: string;
    metadata: {
        [key: string]: unknown;
    };
}

export interface LoggerServiceTransportOptions {
    client: ClientProxy;
}

export class LoggerServiceTransport extends Transport {
    private readonly client: ClientProxy;

    constructor({ client }: LoggerServiceTransportOptions) {
        super();
        this.client = client;
    }

    public log(info: TransportInfo, callback?: () => void): void {
        setImmediate(() => {
            this.emit('logged', info);
        });

        this.client.emit('log', info);

        if (callback) {
            callback();
        }
    }
}
