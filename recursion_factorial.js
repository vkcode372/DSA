/**
 * Calculates the factorial of a given number using recursion.
 *
 * @param {number} num - The number for which to calculate the factorial. Must be a positive integer.
 * @returns {number} The factorial of the given number.
 *
 * @example
 * factorial(5); // returns 120
 * factorial(0); // returns 1
 * factorial(1); // returns 1
 * factorial(10); // returns 3628800
 */
function factorial(num){
    if(num==1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));