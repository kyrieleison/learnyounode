var http = require('http');

var result = "";
http.get(process.argv[2].toString(), function callback (response){
    response.setEncoding("utf8");
    response.on('data', function (data) {
        result = result + data;
    });
    response.on('end', function (data) {
        console.log(result.length);
        console.log(result);
    });
});

