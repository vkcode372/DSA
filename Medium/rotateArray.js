/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}  modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let tempArr=[];
    let n=nums.length;
   
     for(let i=0;i<n;i++){
        tempArr[(i+k)%n]=nums[i];
     }
     for(let i=0;i<n;i++){
        nums[i]=tempArr[i];
     }
     return nums;
};
let nums=[1,2,3,4,5,6,7], k = 2
console.log(rotate(nums,k))
