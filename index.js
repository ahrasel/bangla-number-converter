// index.js

const banglaNumberConverter = {
  toBanglaNumber(number, isCommaSeparated = false) {
    if (number === undefined) {
      return "";
    }
    const banglaNumber = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };
    const numberString = number.toString();
    let banglaNumberString = "";
    for (let i = 0; i < numberString.length; i++) {
      if (banglaNumber[numberString[i]] === undefined) {
        banglaNumberString += numberString[i];
        continue;
      }
      banglaNumberString += banglaNumber[numberString[i]];
    }

    // separate number by comma
    if (isCommaSeparated) {
      const numberArray = banglaNumberString.split(".");
      const integerPart = numberArray[0];
      const decimalPart = numberArray[1];
      const integerPartArray = integerPart.split("");
      const integerPartArrayLength = integerPartArray.length;
      const integerPartArrayWithComma = [];
      for (let i = 0; i < integerPartArrayLength; i++) {
        if (i % 3 === 0 && i !== 0) {
          integerPartArrayWithComma.push(",");
        }
        integerPartArrayWithComma.push(integerPartArray[i]);
      }
      banglaNumberString = integerPartArrayWithComma.join("");
      if (decimalPart) {
        banglaNumberString += `.${decimalPart}`;
      }
    }

    return banglaNumberString;
  },
};

module.exports = banglaNumberConverter;
