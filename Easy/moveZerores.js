/**
 * Moves all zeroes to the end of the given array while maintaining the relative order of the non-zero elements.
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number[]} The modified array with all zeroes moved to the end.
 *
 * @example
 * moveZeroes([0, 1, 0, 3, 12]) returns [1, 3, 12, 0, 0]
 * moveZeroes([0, 0, 1]) returns [1, 0, 0]
 */
var moveZeroes = function(nums) {
    let startIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[startIndex]] = [nums[startIndex], nums[i]];
            startIndex++;
        }
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]))