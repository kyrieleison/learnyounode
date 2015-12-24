var fs = require('fs');

var lines;
var file = fs.readFile(process.argv[2].toString(), function (err, data) {
    if (err) throw err;
    var lines = data.toString().split('\n');
    console.log(lines.length - 1);
});
