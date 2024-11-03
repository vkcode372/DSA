/**
 * Checks if a given sentence is circular by verifying if the last character of each word 
 * is equal to the first character of the next word.
 *
 * A sentence is circular if:

The last character of a word is equal to the first character of the next word.
The last character of the last word is equal to the first character of the first word.
 * 
 * let sentence = "eetcode";
 * For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. 
 * However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
 * Given a string sentence, return true if it is circular. Otherwise, return false.
 * 
 * 
 * 
 * Example 1:
Input: sentence = "leetcode exercises sound delightful"
Output: true
Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
- leetcode's last character is equal to exercises's first character.
- exercises's last character is equal to sound's first character.
- sound's last character is equal to delightful's first character.
- delightful's last character is equal to leetcode's first character.
The sentence is circular.

 * console.log(isCircularSentence(sentence)); // Output: true
 * @param {string} sentence - The sentence to be checked.
 * @returns {boolean} - Returns true if the sentence is circular, false otherwise.
 *
 * @example
 */
var isCircularSentence = function(sentence) {
    let arrayForm = sentence.split(" ");
    for (let i = 0; i < arrayForm.length; i++) {
        let lastChar = arrayForm[i].slice(-1);
        let secondFirstChar = arrayForm[(i + 1) % arrayForm.length][0];
        if (lastChar !== secondFirstChar) {
            return false;
        }
    }
    return true;
};

let sentence = "leetcode exercises sound delightful";
console.log(isCircularSentence(sentence));