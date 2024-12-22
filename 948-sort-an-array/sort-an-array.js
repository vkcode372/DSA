/**
 * @param {number[]} nums
 * @return {number[]}
 */
let margeSort = (nums, start, end) => {
    if (nums.length <= 1) return nums;
    if (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        margeSort(nums, start, mid);
        margeSort(nums, mid + 1, end);
        marge(nums, start, mid, end);
    }
};

let marge = (nums, start, mid, end) => {
    let i = start,
        j = mid + 1,
        result = [];

    while (i <= mid && j <= end) {
        if (nums[i] <= nums[j]) {
            result.push(nums[i]);
            i++;
        } else {
            result.push(nums[j]);
            j++;
        }
    }
    while (i <= mid) {
        result.push(nums[i]);
        i++;
    }
    while (j <= end) {
        result.push(nums[j]);
        j++;
    }

    // Copy sorted result back to the original array at the correct position
    for (let k = 0; k < result.length; k++) {
        nums[start + k] = result[k];
    }
};
var sortArray = function(nums) {
    margeSort(nums, 0, nums.length - 1);
    return nums;
};