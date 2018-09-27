export class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }
    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(eventName);
            });
        } else {
            console.log('Event not found');
        }
    }
    off(eventName, callback) {
        let callbacks = this.events[eventName];
        let index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
    }
}