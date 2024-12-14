function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

function longestPalindrome(s) {
    const n = s.length;
    let maxLength = 0;
    let longestPalindrome = "";
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (isPalindrome(s, i, j)) {
                const length = j - i + 1;
                if (length > maxLength) {
                    maxLength = length;
                    longestPalindrome = s.substring(i, j + 1);
                }
            }
        }
    }

    return longestPalindrome;
}
let s = "babad";
console.log(longestPalindrome(s))