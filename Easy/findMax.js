/**
 * This function returns the maximum of two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {number} The maximum of the two input numbers.
 */
function maxNumber(n1, n2) {
  if (n1 > n2) return n1;
  else return n2;
}

/**
 * This function finds the maximum value in an array using recursion.
 * If the array is empty, it returns null.
 *
 * @param {Array.<number>} arr - The array of numbers to find the maximum value from.
 * @param {number} [startIndex=0] - The index to start searching from. Default is 0.
 * @returns {number|null} The maximum value in the array or null if the array is empty.
 */
function findMax(arr, startIndex = 0) {
  if (arr.length === 0) {
    return null;
  }
  if (startIndex === arr.length - 1) {
    return arr[startIndex];
  }
  return maxNumber(arr[startIndex], findMax(arr, startIndex + 1));
}

const largeArray = [
  234, 543, 67, 2, 9, 12, 83, 942, 13, 56, 0, 329, 105, 423, 18, 90, 741, 36, 
  85, 478, 1, 12, 593, 684, 43, 276, 894, 12, 1002, 745, 999, 28, 314, 805, 47, 
  64, 3, 27, 51, 689, 243, 1083, 762, 555, 421, 666, 92, 33, 7, 1501, 2304, 76, 
  12, 987, 423, 659, 1001, 45, 389, 10, 9999, 473, 81, 24, 76, 32, 1903, 852,
];
const ans = findMax(largeArray);
console.log(ans);
