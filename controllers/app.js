const http = require('http');
const fs = require('fs');
const handleGETRequest = require('./request-handle/handleGETRequest');

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    handleGETRequest(req, res);
  }
});

const _PORT = 3000;
server.listen(_PORT, () => {
  console.log("서버 가동 중 : ", `http://localhost:${_PORT}/`);
});