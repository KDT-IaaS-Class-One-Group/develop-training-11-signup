// 내장 모듈
const http = require('http');
const fs = require('fs');
// 내가 만든 모듈
const handleGETRequest = require('./request-handle/handleGETRequest');
const handlePOSTRequest = require('./request-handle/handlePOSTRequest');

const server = http.createServer((req, res) => {

  /**
   * * 여러가지 처리가 발생하고, 또 똑똑한 서버를 만들기 위할수록
   * * 필연히 코드가 길어진다.
   * 
   * * 설계과정에서 개발자(강사)는 '길어지는 코드 조금 더 편리하게 관리 하는 방법이 있을까?' 라는 기획을 진행
   * * '내가 당장 만들 수 있는 기술 요건' 중 하나인 모듈화를 모색하고, 적용했다.
   * 
   * * 정답이 없는 '제작'의 특징상 고찰을 통해 작업 방식을 생각하는 것이 상당히 중요한 직업적 태도이다.
   */

  if(req.method === "GET") {
    // todo : 아래의 GET 처리 함수는 구체적인 URL 처리를 하지 않고 있다. 추후 구체적인 URL 처리를 위해 수정해야 한다.
    handleGETRequest(req, res);
  } else if(req.method === "POST") {
    // todo : POST 함수 처리만 만들어 놓고 내용물은 전혀 작성하지 않았다.
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