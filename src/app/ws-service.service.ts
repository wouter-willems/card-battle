import {Injectable} from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WsServiceService {
    private connection: WebSocketSubject<any>;

    constructor() {
    }

    public connect(updateStateFn: any) {
        console.log('connecting')
        this.connection = new WebSocketSubject({url: 'ws://localhost:4201', deserializer: e => e.data});
        // this.connection = new WebSocketSubject('ws://localhost:4201');

        this.connection.subscribe(
            (msg) => {
                console.log('message received: ' + msg);
                updateStateFn(msg);
            },
            (err) => console.error(err),
            () => console.log('complete')
        );
    }
    public send(s: any) {
        this.connection.next(s);
    }
}
