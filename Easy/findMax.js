/**
 * This function returns the maximum of two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {number} The maximum of the two input numbers.
 */
function maxNumber(n1, n2) {
  let arr=[]
  console.log('maxNumber', n1, n2);
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

const ans = findMax([2, 4, 1, 1000, 45, 23, 100]);
console.log(ans);
