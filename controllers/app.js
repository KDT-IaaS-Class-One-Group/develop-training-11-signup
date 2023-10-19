// 내장 모듈
const http = require('http');
const fs = require('fs');
// 내가 만든 모듈
const handleGETRequest = require('./request-handle/handleGETRequest');
const handlePOSTRequest = require('./request-handle/handlePOSTRequest');

const server = http.createServer((req, res) => {

  if(req.method === "GET") {
    handleGETRequest(req, res);
  } else if(req.method === "POST") {
    handlePOSTRequest(req, res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

const _PORT = 3000;
server.listen(_PORT, () => {
  console.log("서버 가동 중 : ", `http://localhost:${_PORT}/`);
});