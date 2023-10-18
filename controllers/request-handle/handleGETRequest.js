const fs = require('fs');
module.exports = (req, res) => {
  if (req.url === '/') {
    // readfile method에서 'utf8'을 지정하지 않으면
    // 한글이 깨져서 나온다. 검색어 : readfile 파라미터 utf8 참고
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