/**
 * Converts an integer to its Roman numeral representation.
 *
 * @param {number} num - The integer to convert. Must be a positive integer between 1 and 3999.
 * @returns {string} The Roman numeral representation of the input integer.
 *
 * @example
 * intToRoman(1034); // returns 'MXXXIV'
 */
let intToRoman = function (num) {
  romanIntValue = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";
  for (let key in romanIntValue) {
    while (num >= romanIntValue[key]) {
      str += key;
      num -= romanIntValue[key];
    }
  }
  return str;
};

console.log(intToRoman(1034));
