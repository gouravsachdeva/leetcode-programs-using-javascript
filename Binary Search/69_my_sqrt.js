//Leetcode Problem 69 -> https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    let start = 0;
    let end = x;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(mid * mid > x) {
            end = mid-1;
        } else if (mid * mid < x){
            start = mid+1;
        } else if(mid * mid == x){
            return mid;
        }
    }
    return start - 1;
};