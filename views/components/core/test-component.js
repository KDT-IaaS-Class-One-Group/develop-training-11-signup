module.exports = (elementNode, attributeNode ,contentNode) => {
  // 아래의 매개변수 타입 검사는, 코드 안정성을 위한 장치로서 작성
  // 안티패턴이지만, 소개를 위해 반복작성
  // 추후 융통성 있는 함수로 실행 처리를 하는 등 조치를 통해 개선 가능
  if(typeof(elementNode) !== "string") { throw new TypeError(`${elementNode}는 문자열 타입이어야 합니다.`); }
  if(typeof(attributeNode) !== "object") { throw new TypeError(`${attributeNode}는 객체 타입이어야 합니다.`); }
  if(typeof(contentNode) !== "string") { throw new TypeError(`${contentNode}는 문자열 타입이어야 합니다.`); }
  // throw 키워드를 사용하여, 에러를 발생시키면, 함수의 실행은 중단됨(마치 break 키워드와 유사)
  // ******************
  // HTML의 속성노드 작성 방식이 key = "value" 방식이므로, 문자열을 '조립'하는 방식으로 작성
  let attributes = "";
  // for of 문을 사용하여, 객체의 key, value를 순회
  // [key, value] 구조분해 할당을 사용하여, key, value를 변수에 할당
  // Object.entries() 메소드는 객체의 key, value를 배열로 반환
  for (const [key, value] of Object.entries(attributeNode)) {
    attributes += ` ${key}="${value}"`;
    // 복합대입연산자를 사용하여, attributes 변수에 문자열을 누적
  }
  // 최종적으로 아래의 '문자열'형태로 반환
  let initTag = `<${elementNode} ${attributes}>${contentNode}</${elementNode}>`;
  return initTag;
};