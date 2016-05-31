'use strict';

// const utils = require('./lib/utils');
// const conf = require('./lib/config');
// const loggerModule = require('./lib/logger');
//
// const dummy = require('./lib/dummy');
//
const aok = require('./lib/aok');
const app = new aok();
//
// function *initApp() {
//     yield conf(process.cwd() + '/config.01.json');
//
//     app.conf = conf;
//
//     yield loggerModule(conf.get('loggerOptions'));
//
//     app.logger = loggerModule.createLogger('[default]');
//     app.logger.log("Started!");
//
// }
//
// utils.runGenerator(initApp);
//
//
//
// dummy.dummy1("Tester 123");

const logger = require('./lib/logger').getLogger("[main]");


module.exports = app;
