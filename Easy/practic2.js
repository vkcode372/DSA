/**
 * Counts the number of occurrences for each string value in the given string.
 *
 * @param {string} string - The input string to count occurrences.
 * @returns {Object} - An object where keys are unique characters from the input string,
 * and values are the corresponding counts of each character.
 * If the input string is empty, returns a message "provide the string".
 *
 * @example
 * let string = "leetcode";
 * let result = count(string);
 * console.log(result); // Output: { l: 1, e: 2, t: 1, c: 1, o: 1, d: 1 }
 */
function count(string) {
     let myobj = {};
     if (string.length === 0) return "provide the string";
     for (let i = 0; i < string.length; i++) {
         if (!myobj[string[i]]) {
             myobj[string[i]] = 1;
         } else {
             myobj[string[i]] = myobj[string[i]] + 1;
         }
     }
     return myobj;
}
