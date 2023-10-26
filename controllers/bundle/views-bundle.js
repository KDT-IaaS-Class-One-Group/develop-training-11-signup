const fs = require('fs');
const path = require('path');

function bundleFiles(htmlFile, cssFile, jsFile, outputFile) {
  const html = fs.readFileSync(path.resolve(__dirname, '..', '..', htmlFile), 'utf8');
  const css = fs.readFileSync(path.resolve(__dirname, '..', '..', cssFile), 'utf8');
  const js = fs.readFileSync(path.resolve(__dirname, '..', '..', jsFile), 'utf8');

  // HTML 문자열 내에서 <link>와 <script> 태그를 찾아 변경
  const updatedHtml = html
    .replace('<link rel="stylesheet" href="/views/public/css/index.css">', `<style>${css}</style>`)
    .replace('<script src="/views/index.js" defer></script>', `<script>${js}</script>`);

  fs.writeFileSync(path.resolve(__dirname, '..', '..', outputFile), updatedHtml);
}

// 사용 예
bundleFiles('views/public/index.html', 'views/public/css/index.css', 'views/index.js', 'test-output/output.html');
