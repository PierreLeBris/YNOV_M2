const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Received body: ${body}\n`);
    });
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method not allowed\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
