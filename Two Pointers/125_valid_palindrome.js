//Leetcode Problem 125 -> https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    if (s) {
        let start = 0, end = s.length - 1;
        let sArr = s.toLowerCase().split('');
        while (start < end) {
            if ((/^[a-zA-Z0-9]+$/.test(sArr[start])) && (/^[a-zA-Z0-9]+$/.test(sArr[end]))) {
                if (sArr[start] === sArr[end]) {
                    start++;
                    end--;
                } else {
                    return false;
                }
            }
            if (!(/^[a-zA-Z0-9]+$/.test(sArr[start]))) {
                start++;
            }
            if (!(/^[a-zA-Z0-9]+$/.test(sArr[end]))) {
                end--;
            }
        }
        return true;
    }
    return true;
};