const isPalindrome = (str) => {
    let right = 0, left = str.length - 1;
    while (right < left) {
        if (str[right] !== str[left]) {
            return false;
        }
        right++;
        left--;
    }
    return true;
}
console.log(isPalindrome('madam'));