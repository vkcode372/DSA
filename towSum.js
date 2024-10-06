/**
 * This function finds the indices of two numbers in an array that add up to a given target.
 * It uses a hashmap to store the numbers and their indices as it iterates through the array.
 * If a complement (target - current number) is found in the hashmap, the function returns the indices of the complement and the current number.
 * If no such pair is found, the function returns null.
 *
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum to find.
 * @returns {(number[]|null)} - An array containing the indices of the two numbers that add up to the target, or null if no such pair is found.
 */
let nums=[3,2,4,1,4,7,2,9,4,4];
let target=5;

var twoSum = function(nums, target) {
    const hashmap = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        console.log(hashmap)
        const complement = target - nums[i]; 
        if (hashmap.has(complement)) {

            return [hashmap.get(complement), i];
        }
        hashmap.set(nums[i], i);
    }

    return null;

}
console.log(twoSum(nums,target))