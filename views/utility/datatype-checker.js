module.exports = (inputData, wantDataType) => {
  if(typeof(inputData) !== wantDataType) { throw new TypeError(`${inputData}는 ${wantDataType} 타입이어야 합니다.`); } else {
    return true;
  }
}