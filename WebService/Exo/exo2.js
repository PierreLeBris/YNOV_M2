var http = require('http');

var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-type': 'application/json'});
    var response = {};
    response.host = req.headers.host;
    response.method = req.method;
    resp.end(JSON.stringify(response));
})

server.listen(8000);