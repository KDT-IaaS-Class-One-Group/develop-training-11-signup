
// const fs = require('fs');
// const component = require('./components/core/component');

/**
 * Todo : 중요 문제점
 * ? 1. 컴포넌트 조립 처리가 서버에서 이루어저야 하는데, 이것을 문서연결파일인 여기에서 진행되어 에러가 발생하고 있음.
 * * 접근 : 요청 들어올 떄 컴포넌트 조립을 서버에서 진행하고, 그 결과를 클라이언트에게 전달하는 방식으로 변경하는 것은 어떨지.
 * 
 * 
 * 
 * 
 */


// * initialize
const root = document.getElementById('root');

// ******************************************

/**
 * * render()
 * * 문서에 렌더링하는 실행함수
 */
const render = () => {
  root.innerHTML = `
    <h1>Hello World</h1>
  `;
};
render();