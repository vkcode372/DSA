
/**
 * Calculates the factorial of a given non-negative integer.
 *
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of the input number.
 *
 * @example
 * factorial(5); // returns 120
 * factorial(0); // returns 1
 * factorial(10); // returns 3628800
 */
function factorial(n) {
    if(n<0) return "provide the positive number";
    let sum = 1;
    for (let i = n; i >= 1; i--) {
        sum *= i;
    }
    return sum;
}

console.log(factorial(6));