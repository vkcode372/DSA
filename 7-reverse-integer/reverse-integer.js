/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverse = 0;
    while (x != 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        reverse = reverse * 10 + pop;
        if (reverse > Math.pow(2, 31) || reverse < Math.pow(-2, 31)) {
            return 0;
        }
    }
    return reverse;

};