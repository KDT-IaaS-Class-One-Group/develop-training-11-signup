const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', '..', 'views', 'public', 'index.html');
module.exports = (req, res) => {
  console.log('GET 요청 발생 2');
  console.log(req.url, 3);
  if (req.url === '/') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      console.log(4);
      if (err) { // 에러 처리
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('server error');
        return;
      }
      console.log(5);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
} 