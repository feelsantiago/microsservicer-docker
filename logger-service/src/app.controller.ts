import { Controller } from '@nestjs/common';
import { Payload, Ctx, RmqContext, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @EventPattern('log')
    public addLog(@Payload() data: any, @Ctx() context: RmqContext): string {
        console.log(data);
        console.log(this.appService.flatMetadata(data.metadata));
        return 'success';
    }
}
