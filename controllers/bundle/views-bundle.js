const fs = require('fs');
const path = require('path');
const dataTypeChecker = require('../../views/utility/datatype-checker');

/**
 * todo : 예제로 작성되어 있는 함수 bundleFiles()는 복잡도가 매우 높다.
 * 어떤 부분을 확인해야 적절하게 해당 로직을 이해할 수 있을까?
 * 
 */

function bundleFiles(options) {

  // 유효성 검사 (직접 제작한 함수 활용)
  dataTypeChecker(options, 'object');
  // 간단하게 if문으로 처리하는 것이 옳은 방식일 수 있지만,
  // 모듈의 재사용성을 고려하여, 유효성 검사를 위한 함수를 만들어놓은 모듈을 사용함

  // 초기화(init)
  // ** options **
  // 구조분해 할당 작성법을 사용하면 훨씬 간단해지지만, 어떻게 초기화 하는지를 확인하기 위해
  // 상수(변수) 선언 방식으로 작성함
  const htmlFile = options.htmlFile;
  const cssFile = options.cssFile;
  const jsFile = options.jsFile;
  const outputFile = options.outputFile;
  const cssTagPattern = options.cssTagPattern;
  const jsTagPattern = options.jsTagPattern;
  const cssReplacePattern = options.cssReplacePattern;
  const jsReplacePattern = options.jsReplacePattern;
  
  // 파일 읽기 내부 함수
  function readFileFromRoot(relativePath) {
    return fs.readFileSync(path.resolve(__dirname, '..', '..', relativePath), 'utf8');
  }

  // HTML 내 태그 교체 함수
  function replaceTagsInHtml(html, cssContent, jsContent) {
    // 메서드 체이닝을 사용하여, replace 메서드를 연속적으로 호출함
    // 메서드 체이닝 테크닉을 사용하지 않으면, 아래와 같이 작성해야 함
    // 변수 낭비가 심함
    // const replacedCss = html.replace(cssTagPattern, cssReplacePattern(cssContent));
    // const replacedJs = replacedCss.replace(jsTagPattern, jsReplacePattern(jsContent));
    // return replacedJs;

    return html
      .replace(cssTagPattern, cssReplacePattern(cssContent))
      .replace(jsTagPattern, jsReplacePattern(jsContent));
  }

  const html = readFileFromRoot(htmlFile);
  const css = readFileFromRoot(cssFile);
  const js = readFileFromRoot(jsFile);

  const updatedHtml = replaceTagsInHtml(html, css, js);

  fs.writeFileSync(path.resolve(__dirname, '..', '..', outputFile), updatedHtml);
}

// 호출 부분
// 캡슐화된 객체
const forBundlePaths = {
  htmlFile: 'views/public/index.html',
  cssFile: 'views/public/css/index.css',
  jsFile: 'views/index.js',
  outputFile: 'test-output/output.html',
  cssTagPattern: '<link rel="stylesheet" href="/views/public/css/index.css">',
  jsTagPattern: '<script src="/views/index.js" defer></script>',
  cssReplacePattern: (content) => `<style>${content}</style>`,
  jsReplacePattern: (content) => `<script>${content}</script>`
};

bundleFiles(forBundlePaths);
