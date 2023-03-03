const http = require('http');

const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end('Bonjour, je suis le premier serveur !\n');
});

server1.listen(3000, () => {
  console.log('Le premier serveur écoute sur le port 3000.');
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Bonjour, je suis le deuxième serveur !\n');
});

server2.listen(4000, () => {
  console.log('Le deuxième serveur écoute sur le port 4000.');
});
