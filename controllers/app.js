const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
});

const _PORT = 3000;
server.listen(_PORT, () => {
  console.log("서버 가동 중 : ", `http://localhost:${_PORT}/`);
});