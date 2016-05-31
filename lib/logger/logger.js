'use strict';

const LOG_LEVELS = {
    OFF:    {weight: 0, color: 39},
    ERROR:  {weight: 1, color: 31},
    WARN:   {weight: 2, color: 33},
    INFO:   {weight: 3, color: 32},
    DEBUG:  {weight: 4, color: 36}
};

// const COLORS = {
//     ALL: "grey",
//     TRACE: "blue",
//     DEBUG: "cyan",
//     INFO: "green",
//     WARN: "yellow",
//     ERROR: "red",
//     FATAL: "magenta",
//     OFF: "grey"
// };

// const styles = {
//     //styles
//     'bold'      : [1,  22],
//     'italic'    : [3,  23],
//     'underline' : [4,  24],
//     'inverse'   : [7,  27],
//     //grayscale
//     'white'     : [37, 39],
//     'grey'      : [90, 39],
//     'black'     : [90, 39],
//     //colors
//     'blue'      : [34, 39],
//     'cyan'      : [36, 39],
//     'green'     : [32, 39],
//     'magenta'   : [35, 39],
//     'red'       : [31, 39],
//     'yellow'    : [33, 39]
// };
//
// function colorizeStart(style) {
//     return style ? '\x1B[' + styles[style][0] + 'm' : '';
// }
// function colorizeEnd(style) {
//     return style ? '\x1B[' + styles[style][1] + 'm' : '';
// }
//
// function colorize (str, style) {
//     return colorizeStart(style) + str + colorizeEnd(style);
// }

const EventEmitter = require('events');

// let options = {};
//
// class LogEvent extends EventEmitter {
//
//     constructor(prefix) {
//         super();
//         // this.prefix = prefix;
//
//         this.on('write', (m) => {
//
//             const s = `${options.logLevel} ${prefix} ${m}`;
//
//             const ss = colorize(s, 'green');
//
//             console.log(ss);
//         });
//
//     }
//
//     log(message) {
//         this.emit('write', message)
//     }
//
// }
//
// function Logger(opts) {
//     options = opts;
// }
//
// Logger.createLogger = function(loggerPrefix) {
//     return new LogEvent(loggerPrefix);
// };

class Logger extends EventEmitter {
    constructor(opts) {

        super();

        console.log("test");

        this.on('newRecord', (level, message) => {
            console.log(message);
        });

    }

    getLogger(a) {
        return {
            log: function (a) {
                this.emit('newRecord', arguments);
            }
        }
    }
}

module.exports = Logger;
