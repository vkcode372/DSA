/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const number = Number.parseInt(s);
    const limit = Math.pow(2, 31)
    if (number) {
        if (number <= -limit) return -limit
        if (number >= limit - 1) return limit - 1

        return number
    }

    return 0;
};