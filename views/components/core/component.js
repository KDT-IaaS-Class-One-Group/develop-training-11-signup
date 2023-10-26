const fs = require("fs");
const dataTypeChecker = require("../../utility/dataTypeChecker");

module.exports = (elementNode, attributeNode ,contentNode) => {

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
