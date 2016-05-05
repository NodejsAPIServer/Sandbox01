'use strict';

let configData;
let isValid;

function config(configFileName) {
    configData = require(configFileName);
    isValid = true;
}

config.isValid = function() {
    return isValid;
};

config.get = function(optionName) {
    return configData[optionName];
};

module.exports = config;
