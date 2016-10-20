const fs = require('fs');
const http = require('http');
const path = require('path');

const port = 8080;

const handler = (req, res) => {
  const url = req.url;
  if (url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('Not Found');
  }
}

const server = http.createServer(handler);

server.listen(port, () => {
  console.log('Server running on http://localhost:8080');
});

