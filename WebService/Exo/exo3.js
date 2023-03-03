var http = require('http');

var server = http.createServer(function(req, resp){
    if(req.method == "POST"){
        resp.writeHead(200, {'Content-type': 'text/plain'});
        var body = '';
        req.on('data', function(data){
            body += data.toString();
        });
        req.on('end', function(){
            resp.end(body);
        });
    }else if(req.method == 'GET'){
        resp.writeHead(404, {'Content-type': 'text/plain'});
        resp.end("Not Found");
    }
    
})

server.listen(8000);