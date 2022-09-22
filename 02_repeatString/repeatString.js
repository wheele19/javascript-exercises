
let repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let loopstring = '';

for (i=0; i < num; i++) {
    loopstring = loopstring+string;
}


return loopstring;

};


// Do not edit below this line
module.exports = repeatString;

