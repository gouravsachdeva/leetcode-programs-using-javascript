//Leetcode Problem 744 -> https://leetcode.com/problems/find-smallest-letter-greater-than-target/

var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length-1;
    if(target >= letters[end]) return letters[start];
    while(start <= end){
        let mid = Math.ceil((start+end)/2);
        target < letters[mid] ? end = mid-1 : start = mid + 1
    }
    return letters[start];
};