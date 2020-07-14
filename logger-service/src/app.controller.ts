import { Controller } from '@nestjs/common';
import { Payload, Ctx, RmqContext, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    @EventPattern('log')
    public addLog(@Payload() data: number[], @Ctx() context: RmqContext): string {
        return 'success';
    }
}
