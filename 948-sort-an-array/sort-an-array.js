/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const heapify = (nums, n, i) => {
    let largest = i; 
    let left = 2 * i + 1; 
    let right = 2 * i + 2;

    if (left < n && nums[largest] < nums[left]) {
        largest = left;
    }

    if (right < n && nums[largest] < nums[right]) {
        largest = right;
    }

    if (largest !== i) {
        [nums[largest], nums[i]] = [nums[i], nums[largest]]; 
        heapify(nums, n, largest); 
    }
};
var sortArray = function(nums) {
    let n = nums.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(nums, n, i);
    }

    for (let size = n - 1; size > 0; size--) {
        [nums[0], nums[size]] = [nums[size], nums[0]];
        heapify(nums, size, 0);
    }
    return nums;
};