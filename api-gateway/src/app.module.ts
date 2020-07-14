import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';

const AMQP_URL = process.env.AMQP_URL || 'amqp://localhost:5672';
const AMQP_QUEUE = process.env.AMQP_QUEUE || 'logger_queue';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'LOGGER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [AMQP_URL],
                    queue: AMQP_QUEUE,
                    queueOptions: {
                        durable: false,
                    },
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
