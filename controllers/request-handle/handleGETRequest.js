const fs = require('fs');
module.exports = (req, res) => {
  if (req.url === '/') {
    fs.readFile('views/public/index.html', 'utf8', (err, data) => {
      if (err) { // 에러 처리
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('server error');
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
} 