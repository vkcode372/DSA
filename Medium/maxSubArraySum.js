/**
 * Finds the maximum subarray sum in a given array of integers.
 *
 * @function maxSubArray
 * @param {number[]} nums - The input array of integers.
 * @returns {number} The maximum subarray sum.
 *
 * @example
 * maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // returns 6
 *
 * @description
 * This function uses Kadane's algorithm to find the maximum subarray sum.
 * It iterates through the array, maintaining a running sum and a maximum value.
 * If the running sum becomes negative, it is reset to zero.
 * The maximum value is updated whenever a larger sum is found.
 * Finally, the function returns the maximum subarray sum.
 */
var maxSubArray = function(nums) {
    let sum=0;
    let maxValue=nums[0];
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        maxValue=Math.max(maxValue,sum);
        if(sum<0){
            sum=0;
        }
    }
    return maxValue;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))