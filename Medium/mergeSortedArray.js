/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param {number[]} nums1 - The first sorted array. Its length should be at least m.
 * @param {number} m - The number of elements in the first sorted array.
 * @param {number[]} nums2 - The second sorted array. Its length should be at least n.
 * @param {number} n - The number of elements in the second sorted array.
 * @returns {number[]} - The merged and sorted array.
 *
 * @example
 * merge([1,2,3,0,0,0], 3, [2,5,6], 3)
 * // returns [1,2,2,3,5,6]
 */
let merge = function(nums1, m, nums2, n) {
    let index=m+n-1, i=m-1;j=n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[index--]=nums1[i--]
        }else{
            nums1[index--]=nums2[j--]
        }
    }

    while(j>=0){
         nums1[index--]=nums2[j--]
    }
    return nums1;
};
console.log(merge([1,2,3],3,[2,5,6],3))