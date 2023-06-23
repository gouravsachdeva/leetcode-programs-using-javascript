//Leetcode Problem 41 -> https://leetcode.com/problems/first-missing-positive/

var firstMissingPositive = function (nums) {
    let start = 0;
    let n = nums.length;
    while (start < n) {
        if (nums[start] != start + 1 && nums[start] > 0 && nums[start] < n && nums[start] != nums[nums[start] - 1]) {
            let temp = nums[start];
            nums[start] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
        else {
            start++;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};