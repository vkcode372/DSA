/**
 * This function generates a Fibonacci series up to the nth number.
 *
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {Array} - An array containing the Fibonacci series up to the nth number.
 *
 * @example
 * fibonacciNumber(3)
 * // returns [0, 1, 1]
 *
 * fibonacciNumber(5)
 * // returns [0, 1, 1, 2, 3]
 */
const fibonacciNumber = function(n){
    let ans=[0,1];
    for(let i=2; i<=n-1; i++){
        ans.push(ans[i-1]+ans[i-2]);
    }
    return ans;
}

console.log(fibonacciNumber(3))
