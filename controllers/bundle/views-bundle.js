const fs = require('fs');
const path = require('path');
const dataTypeChecker = require('../../views/utility/datatype-checker');

function bundleFiles(options) {

  dataTypeChecker(options, 'object');

  // ** options **
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
