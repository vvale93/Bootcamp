"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = exports.Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(eventName, callback) {
            if (this.events[eventName]) {
                this.events[eventName].push(callback);
            } else {
                this.events[eventName] = [callback];
            }
        }
    }, {
        key: 'emit',
        value: function emit(eventName) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(function (callback) {
                    callback(eventName);
                });
            } else {
                console.log('Event not found');
            }
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            var callbacks = this.events[eventName];
            var index = callbacks.indexOf(callback);
            callbacks.splice(index, 1);
        }
    }]);

    return EventEmitter;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = exports.Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log("The " + info + " event has been emitted.");
        }
    }]);

    return Logger;
}();
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Movie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = require('./src/eventEmitter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = exports.Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this._cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            this.emit("play");
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.emit('pause');
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit('resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(cast) {
            if (cast instanceof Actor) {
                this._cast.push(cast);
            } else if (Array.isArray(cast)) {
                for (var i = 0; i < cast.length; i++) {
                    if (cast[i] instanceof Actor) {
                        this._cast.push(cast[i]);
                    } else {
                        console.log('The element ' + cast[i] + ' is not an actor');
                    }
                }
            } else {
                console.log('The element ' + cast + ' is not an actor');
            }
        }
    }]);

    return Movie;
}(_eventEmitter.EventEmitter);
'use strict';

var _eventEmitter = require('eventEmitter.js');

var _movie = require('movie.js');

var _actor = require('actor.js');

var _logger = require('logger.js');

var social = {
    share: function share(friendName) {
        console.log(friendName + ' shared ' + this.title);
    },
    like: function like(friendName) {
        console.log(friendName + ' liked ' + this.title);
    }
};

var terminator = new _movie.Movie('Terminator I', 1985, 60);
/*const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
terminator.addCast(arnold);
terminator.addCast(actors);*/
var logger = new _logger.Logger();
terminator.on("play", logger.log);
terminator.play();

var extend = Object.assign(terminator, social);
extend.like('Pepe');
/*let rogueOne = new Movie ('Rogue One', 2016, 133);
let lotr = new Movie ('The return of the king', 2003, 251);
let ralph = new Movie ('Wreck-It Ralph', 2012, 101);*/
