'use strict';

const EventEmitter = require('events');

let options = {};

class LogEvent extends EventEmitter {

    constructor(prefix) {
        super();
        // this.prefix = prefix;

        this.on('write', (m) => {

            const s = `${options.logLevel} ${prefix} ${m}`;

            console.log(s);
        });

    }

    log(message) {
        this.emit('write', message)
    }

}

function Logger(opts) {
    options = opts;
}

Logger.createLogger = function(loggerPrefix) {
    return new LogEvent(loggerPrefix);
};

module.exports = Logger;
