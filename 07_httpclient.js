var http = require('http');

http.get(process.argv[2].toString(), function callback (response){
    response.setEncoding("utf8");
    response.on('data', function (data) {
        console.log(data);
    });
})
