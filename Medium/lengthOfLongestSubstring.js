/**
 * This function calculates the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string.
 * @returns {number} The length of the longest substring without repeating characters.
 *
 * @example
 * lengthOfLongestSubstring("abcdbdt") // returns 5
 * lengthOfLongestSubstring("pwwkew") // returns 3
 * lengthOfLongestSubstring("") // returns 0
 */
var lengthOfLongestSubstring = function(s) {
    let stringLength = 0, setData = new Set();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        console.log(setData, setData.size);

        if (!setData.has(s[right])) {
            setData.add(s[right]);
            stringLength = Math.max(stringLength, setData.size);
            right++;
            console.log(stringLength, "stringLength");
        } else {
            setData.delete(s[left]);
            left++;
        }
    }

    return stringLength;
};

let s = "abcdbdt";
console.log(lengthOfLongestSubstring(s));