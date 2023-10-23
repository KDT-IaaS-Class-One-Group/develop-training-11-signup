const fs = require("fs");
const dataTypeChecker = require("../../utility/dataTypeChecker");

module.exports = (elementNode, attributeNode ,contentNode) => {

  // HTML 고정이므로, 리터럴 사용
  dataTypeChecker(elementNode, "string");
  dataTypeChecker(attributeNode, "object");
  dataTypeChecker(contentNode, "string");

  let attributes = "";
  for (const [key, value] of Object.entries(attributeNode)) {
    attributes += ` ${key}="${value}"`;
  }
  let initTag = `<${elementNode} ${attributes}>${contentNode}</${elementNode}>`;
  return initTag;
};

/**
 * <h1 style="color: red;">Hello World</h1>
 * 결과적으로 해당 모듈은 위와 같은 '문자열'을 반환하고, innerHTML에 할당하여, 문서에 렌더링
 * 
 */