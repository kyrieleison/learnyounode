var mod = require('./06_module.js');

var dirname = process.argv[2].toString();
var extname = process.argv[3].toString();

var callback = function (err, data) {
    if (err) return err;
    for(var i in data) {
        console.log(data[i]);
    }
};

mod(dirname, extname, callback);
