export default function numberToEng(number) {
  var inputNumber = number < 0 ? false : number;
  var unitWords = ["", "Thousand", "Million", "Billion"];
  var splitUnit = 1000;
  var splitCount = unitWords.length;
  var resultArray = [];
  var resultString = "";

  for (var i = 0; i < splitCount; i++) {
    var unitResult =
      (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (var i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + " " + unitWords[i] + resultString;
  }
  if (resultString.indexOf(unitWords[1]) !== -1) {
    const endIdx = resultString.indexOf(unitWords[1]) + unitWords[1].length;
    resultString = resultString.slice(0, endIdx);
  }

  return resultString;
}
