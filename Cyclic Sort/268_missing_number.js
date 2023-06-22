//Leetcode Problem 268 -> https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
    let start = 0;
    let n = nums.length;
    while (start < n) {
        if (nums[start] < n && nums[start] != start) {
            let temp = nums[start];
            nums[start] = nums[temp];
            nums[temp] = temp;
        } else {
            start++;
        }
    }
    for (let item = 0; item <= n; item++) {
        if (nums[item] != item) {
            return item;
        }
    }
};