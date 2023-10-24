const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', '..', 'views', 'public', 'index.html');
module.exports = (req, res) => {
  console.log('GET 요청 tracking-2', 'handleGETRequest.js');
  if (req.url === '/') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      console.log('GET 요청 tracking-3', 'fs.readFile');
      if (err) { // 에러 처리
        console.log("GET 요청 tracking-4", "fs.readFile 에러");
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('server error');
        return;
      }
      console.log("GET 요청 tracking-5", "정상 작동");
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
} 