'use strict';

const EventEmitter = require('events');

class Application extends EventEmitter {

    constructor() {
        super();

        this.initware = [];

    }

    addInitWorker(fn) {
        this.initware.push(fn)
    }

    init() {
        // console.log(this.initware.length);

        const iw = this.initware;

        function* a() {

            const n = iw.length;
            let i = 0;

            while(i<n) {

                // console.log(i);

                const nextFunction = iw[i];
                const b = nextFunction.call(this);

                yield b;

                i++;
            }
        }

        const c = a();
        let goOn = !c.next().done;

        while(goOn) {
            goOn = !c.next().done;
        }

    }

}

module.exports = Application;
