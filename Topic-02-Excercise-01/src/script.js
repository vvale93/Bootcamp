import { EventEmitter } from 'eventEmitter.js';
import { Movie } from 'movie.js';
import { Actor } from 'actor.js';
import { Logger } from 'logger.js';

let social = {
    share: function(friendName) {
        console.log(`${friendName} shared ${this.title}`);
    },
    like: function(friendName) {
        console.log(`${friendName} liked ${this.title}`);
    },
}

const terminator = new Movie('Terminator I', 1985, 60);
/*const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
terminator.addCast(arnold);
terminator.addCast(actors);*/
let logger = new Logger();
terminator.on('play', logger.log);
terminator.play();

let extend  = Object.assign(terminator, social);
extend.like('Pepe');
/*let rogueOne = new Movie ('Rogue One', 2016, 133);
let lotr = new Movie ('The return of the king', 2003, 251);
let ralph = new Movie ('Wreck-It Ralph', 2012, 101);*/
