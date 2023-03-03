var http = require('http');

var portInterServer1 = 8080;
var portInterServer2 = 8081;

var portClient1 = 8000;
var portClient2 = 8001;

var host1 = "localhost";
var host2 = "localhost";

var messages = {};

var clientRequestHandler = function(req, res){
    var path = req.url.split('?')[0];
    if(!path || path =='/'){
        res.writeHead(404, {'Content-type': 'application/json'});
        res.end('{message : "page not found"}');
    }else{
        if(req.method == 'GET'){
            res.writeHead(200, {'Content-type': 'application/json'});
            if(!messages[path]){
                res.end(JSON.stringify([]));
            }else{
                res.end(JSON.stringify(messages[path]));
                messages[path] = 0;
                delete messages[path];
            }    
        }else if(req.method == 'POST'){
            var body = '';
            req.on('data', function(data){
                body += data.toString();
            });
            req.on('end', function(){              
                var options = {
                    port : portInterServer1,
                    hostname : host1,
                    host : host1 + ':' + portInterServer1,
                    path : path,
                    method : req.method
                };
                var request = http.request(options, function(response){
                    var body = '';
                    response.on("error", function(e){
                        console.log(e);
                        res.writeHead(500, {'Content-type': 'application/json'});
                        res.end(e);
                    });
                    response.on("data", function(data){
                        body += data.toString();
                    });
                    response.on('end', function(){
                        res.writeHead(200, {'Content-type': 'application/json'});
                        res.end(body);
                    });
                });
                request.on("error", function(e){
                    console.log(e);
                    res.writeHead(500, {'Content-type': 'application/json'});
                    res.end(e);
                });
                request.end(body);
            });  
        }else{
            res.writeHead(404, {'Content-type': 'application/json'});
            res.end('{message : "page not found"}');
        }
    }
}
var interServerRequestHandler = function(req, res){
    var path = req.url.split('?')[0];
    if(!path || path =='/'){
        res.writeHead(404, {'Content-type': 'application/json'});
        res.end('{message : "page not found"}');
    }else{
        if(req.method == 'POST'){
            var body = '';
            res.writeHead(200, {'Content-type': 'application/json'});
            req.on('data', function(data){
                body += data.toString();
            });
            req.on('end', function(){
                if(!messages[path]){
                    messages[path] = [];
                }
                messages[path].push(body);
                res.end('{status : "ok"}');
            });  
        }else{
            res.writeHead(404, {'Content-type': 'application/json'});
            res.end('{message : "page not found"}');
        }
    }
}
var clientServer = http.createServer(clientRequestHandler);
var interServer = http.createServer(interServerRequestHandler);
clientServer.listen(portClient2);
interServer.listen(portInterServer2);