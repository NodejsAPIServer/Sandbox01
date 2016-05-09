'use strict';

const logger = require('./logger').createLogger("[dummy]");

module.exports.dummy1 = (msg) => {
    logger.log("From Dummy!!!");
    logger.log(msg);
};
