/**
 * @param {number} n
 * @return {boolean}
 */
let sumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
        let n1 = num % 10;
        sum += n1 * n1;
        num = Math.floor(num / 10);
    }
    return sum;
}
var isHappy = function (n) {
    let set = new Set();
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = sumOfSquares(n)
    }
    return n===1;

};