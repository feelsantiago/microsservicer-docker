import { Transport, ClientOptions } from '@nestjs/microservices';

const AMQP_URL = process.env.AMQP_URL || 'amqp://localhost:5672';
const AMQP_QUEUE = process.env.AMQP_QUEUE || 'logger_queue';

export const LoggerServiceOptions: ClientOptions = {
    transport: Transport.RMQ,
    options: {
        urls: [AMQP_URL],
        queue: AMQP_QUEUE,
        queueOptions: {
            durable: false,
        },
    },
};
