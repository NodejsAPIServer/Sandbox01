'use strict';

const app = require('./app');

app.init();

// app.initialize();

// const appClass = require('./app');
// const app = new appClass(process.cwd() + '/config.01.json');
//
// // const d = require('./lib/dummy');
//
// const conf = require('./lib/config');
// const loggerClass = require('./lib/logger');
// const logger = loggerClass.createLogger('asd');
//
// // console.log(loggerClass);
// // console.log(logger);
//
// function* runApp() {
//
//     yield conf.isValid();
//     yield conf.get('loggerOptions');
//
//     loggerClass(conf.get('loggerOptions'));
//
//     logger.log("Started!");
//
// }
//
// const r = runApp();
//
// console.log(r.next().value);
// console.log(r.next().value);
// r.next();
//
// const e = require('./lib/dummy');
