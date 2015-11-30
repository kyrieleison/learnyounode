var fs = require('fs');

var dirname = process.argv[2].toString();
var extname = process.argv[3].toString() || null;

fs.readdir(dirname, function (err, filelist) {
    if (err) throw err;
    filelist.forEach(function(file, index) {
        if (extname != null && file.lastIndexOf("." + extname) != -1) {
            console.log(file);
        }
    });
});

