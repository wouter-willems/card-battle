import {Injectable} from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';
import {delayWhen, map, retryWhen} from 'rxjs/operators';
import {timer} from 'rxjs';

// const wsUrl = 'localhost';
const wsUrl = '84.27.20.147';

@Injectable({
    providedIn: 'root'
})
export class WsServiceService {
    private connection: WebSocketSubject<any>;
    private _isOnline = false;

    constructor() {
    }

    public connect(updateStateFn: any) {
        console.log('connecting')
        this.connection = new WebSocketSubject({
            url: `ws://${wsUrl}:4201`,
            deserializer: e => e.data,
            closeObserver: {
                next: () => this._isOnline = false
            }
        });
        // this.connection = new WebSocketSubject({url: 'ws://84.27.20.147:4201', deserializer: e => e.data});

        this.connection.pipe(
            retryWhen(errors => {
                return errors.pipe(
                    // restart in 5 seconds

                    delayWhen(val => timer(1000))
                );
            })
        ).subscribe(
            (msg) => {
                this._isOnline = true;
                console.log('message received: ' + msg);
                updateStateFn(msg);
            },
            (err) => {
                console.error(err);
                console.log('DISCONNECT')
            },
            () => console.log('complete')
        );
    }

    public send(s: any) {
        this.connection.next(s);
    }

    public isOnline() {
        return this._isOnline;
    }
}
