// unique number of occurrences

/**
 * Checks if the number of occurrences of each element in the array is unique.
 * Given an array of integers arr, return true if the number of occurrences of 
 * each value in the array is unique or false otherwise.
 * 
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.  
 * 
 * Example 2:
200
800
 Input: arr = [1,2]
 Output: false
 Example 3:

 Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 Output: true
 * 
 * @param {Array} arr - The input array.
 * @returns {boolean} Returns true if the number of occurrences of each element is unique, false otherwise.
 *
 * @example
 * uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]); // returns false
 * uniqueOccurrences([1, 2, 3, 4, 5]); // returns true
 */
function uniqueOccurrences(arr) {
  let newMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (newMap.has(arr[i])) {
      newMap.set(arr[i], newMap.get(arr[i]) + 1);
    } else {
      newMap.set(arr[i], 1);
    }
  }
  return new Set([...newMap.values()]).size === [...newMap.values()]?.length;
}

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
