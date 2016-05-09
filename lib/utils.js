'use strict';

module.exports.runGenerator = function (g) {
    
    const a = g();
    
    let goOn = !a.next().done;
    
    while(goOn) {
        goOn = !a.next().done;
    }
    
};
