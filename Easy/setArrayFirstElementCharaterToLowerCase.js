let arr=["Cat","Window","Power"];
/**
 * This function changes the first character of each string in the given array to lowercase.
 * If the first character is already lowercase, it remains unchanged.
 *
 * @param {string[]} arr - The array of strings to be processed.
 * @returns {string[]} The modified array with the first character of each string in lowercase.
 */
function changeToLowerCase(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i][0] === arr[i][0].toUpperCase()) {
            arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1);
        }
    }
    return arr;
}
console.log(changeToLowerCase(arr))