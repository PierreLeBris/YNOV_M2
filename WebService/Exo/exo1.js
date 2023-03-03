var http = require('http');

var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-type': 'text/plain'});
    resp.end("Hello World");
})

server.listen(8000);s