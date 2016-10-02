import { EventEmitter } from 'events';

export default function (events: string[]) {
    return class extends EventEmitter {
        emit(event: string | symbol, ...args: any[]) {
            if (typeof event === 'string' && events.includes(event)) {
                return super.emit(event, ...args);
            }
            throw new Error(`${event} is not a valid event to emit`);
        }
        on(event: string | symbol, listener: Function) {
            if (typeof event === 'string' && events.includes(event)) {
                return super.on(event, listener);
            }
            throw new Error(`${event} is not a valid event to add listener`);
        }
    }
}