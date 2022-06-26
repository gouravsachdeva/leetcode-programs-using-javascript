//Leetcode Problem 217 -> https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
    if (nums.length > 1) {
        let obj = {};
        for (let i = 0; i < nums.length; i++) {
            if (!obj[nums[i]]) {
                obj[nums[i]] = true;
            } else {
                return true
            }
        }
    }
    return false;
};