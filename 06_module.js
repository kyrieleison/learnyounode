var fs = require('fs');

module.exports = function lsfilter (dirname, extname, callback) {
    fs.readdir(dirname, function (err, filelist) {
        if (err) return callback(err);
        callback(null, filelist.filter(function(file, index) {
            return (extname != null && file.lastIndexOf("." + extname) != -1)
        }));
    });
};
