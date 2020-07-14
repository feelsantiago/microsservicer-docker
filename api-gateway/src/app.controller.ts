import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
    constructor(@Inject('LOGGER_SERVICE') private client: ClientProxy) {}

    @Get()
    public log(): Observable<string> {
        return this.client.emit('log', 'Logger message from gateway').pipe(
            map((result) => {
                return 'Log send';
            }),
        );
    }
}
