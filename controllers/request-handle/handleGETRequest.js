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
  } else if (req.url === "/views/public/css/index.css") {
    fs.readFile(path.join(__dirname, '..', '..', 'views', 'public', 'css', 'index.css'), (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('server error');
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
  } else if (req.url === "/views/index.js") {
    fs.readFile(path.join(__dirname, '..', '..', 'views', 'index.js'), (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('server error');
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(data);
    });
  } else {  
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 not found');

  } // else       


} // module.exports 