/**
 * Removes all occurrences of a specific value from an array and returns a new array.
 *
 * @param {Array} nums - The input array.
 * @param {number} val - The value to be removed from the array.
 * @returns {Array} A new array with all occurrences of the specified value removed.
 */
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

var removeElement = function (nums, val) {
  let j = 0;
  let newArr=[];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newArr[j] = nums[i];
      j++;
    }
  }
  return newArr;
};
console.log(removeElement(nums, val));
