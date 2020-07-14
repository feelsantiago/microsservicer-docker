import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

const AMQP_URL = process.env.AMQP_URL || 'amqp://localhost:5672';
const AMQP_QUEUE = process.env.AMQP_QUEUE || 'logger_queue';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: [AMQP_URL],
            queue: AMQP_QUEUE,
            queueOptions: {
                durable: false,
            },
        },
    });

    app.listen(() => console.log('Logger service is listening'));
}
bootstrap();
