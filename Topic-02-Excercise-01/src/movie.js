import { EventEmitter } from './src/eventEmitter';

export class Movie extends EventEmitter{
    constructor (title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;        
        this._cast = [];
    }
    play (){
        this.emit('play');
    }
    pause (){
        this.emit('pause');
    }
    resume (){
        this.emit('resume');
    }
    addCast(cast){
        if(cast instanceof Actor){
            this._cast.push(cast);
        }else if(Array.isArray(cast)){
            let isCast = cast.find(x => x instanceof Actor);
            if (isCast != undefined){
                this._cast.push(isCast);
            }else{
                console.log('Can\'t find any actors');
            }
        }else{
            console.log(`The element ${cast} is not an actor`);
        }
    }
}
