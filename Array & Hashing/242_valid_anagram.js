//Leetcode Problem 242 -> https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
    if (s && t && (s.length === t.length)) {
        if (s.split('').sort().join('') === t.split('').sort().join('')) {
            return true;
        } else {
            false
        }
    }
    return false
};