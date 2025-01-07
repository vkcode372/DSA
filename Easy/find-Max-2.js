
function findMax(arr, startIndex = 0) {
   if(arr.length === 0) return null;
   let largest=0;
   for(let i=0; i<arr.length; i++) {
    if(arr[i]>largest){
      largest = arr[i];
    }
   }
   return largest
}
const largeArray = [
  234, 543, 67, 2, 9, 12, 83, 942, 13, 56, 0, 329, 105, 423, 18, 90, 741, 36, 
  85, 478, 1, 12, 593, 684, 43, 276, 894, 12, 1002, 745, 999, 28, 314, 805, 47, 
  64, 3, 27, 51, 689, 243, 1083, 762, 555, 421, 666, 92, 33, 7, 1501, 2304, 76, 
  12, 987, 423, 659, 1001, 45, 389, 10, 9999, 473, 81, 24, 76, 32, 1903, 852,
];
const ans = findMax(largeArray);
console.log(ans);
