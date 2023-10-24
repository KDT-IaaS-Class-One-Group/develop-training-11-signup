
// const fs = require('fs');
// const component = require('./components/core/component');

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