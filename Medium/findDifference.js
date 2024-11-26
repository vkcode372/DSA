/**
 * This function calculates the difference between two arrays of numbers.
 * It returns an array of two arrays, where the first array contains unique elements present in the first array but not in the second array,
 * and the second array contains unique elements present in the second array but not in the first array.
 *
 * @param {number[]} nums1 - The first array of numbers.
 * @param {number[]} nums2 - The second array of numbers.
 * @returns {number[][]} - An array of two arrays, where the first array contains unique elements from nums1 and the second array contains unique elements from nums2.
 *
 * @example
 * let nums1 = [1, 2, 3, 3];
 * let nums2 = [1, 1, 2, 2];
 * console.log(findDifference(nums1, nums2)); // Output: [[3], [4, 6]]
 */
var findDifference = function(nums1, nums2) {
   let arrValue1=new Set(nums1);
   let arrValue2=new Set(nums2);
   for (let item of arrValue1){
     if(arrValue2.has(item)){
        arrValue1.delete(item);
        arrValue2.delete(item);
     }
   }
   return [[...arrValue1],[...arrValue2]];
};
let nums1 = [1,2,3,3], nums2 = [1,1,2,2]
console.log(findDifference(nums1, nums2));