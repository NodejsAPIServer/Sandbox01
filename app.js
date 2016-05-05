'use strict';

// const conf = require('./lib/config');

const aok = require('./lib/aok');
const app = new aok();

app.addInitWorker(() => {
    console.log("Test 1");
});

app.addInitWorker(() => {
    console.log("Test 2");
});

app.addInitWorker(() => {
    console.log("Test 3");
});

module.exports = app;
