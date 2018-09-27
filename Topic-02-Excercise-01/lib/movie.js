import { EventEmitter } from './src/eventEmitter';

export class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this._cast = [];
    }
    play() {
        this.emit("play");
    }
    pause() {
        this.emit('pause');
    }
    resume() {
        this.emit('resume');
    }
    addCast(cast) {
        if (cast instanceof Actor) {
            this._cast.push(cast);
        } else if (Array.isArray(cast)) {
            for (let i = 0; i < cast.length; i++) {
                if (cast[i] instanceof Actor) {
                    this._cast.push(cast[i]);
                } else {
                    console.log(`The element ${cast[i]} is not an actor`);
                }
            }
        } else {
            console.log(`The element ${cast} is not an actor`);
        }
    }
}