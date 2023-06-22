//Leetcode Problem 645 -> https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findErrorNums = function(nums) {
    let arr = [];
    let start = 0;
    let n = nums.length;
    while (start < n) {
        if (nums[start] != start + 1 && nums[start] != nums[nums[start] - 1]) {
            let temp = nums[start];
            nums[start] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
        else {
            start++;
        }
    }
    for (let item = 0; item < n; item++) {
        if (nums[item] != item + 1) {
            arr.push(nums[item]); // The value which didn't matched
            arr.push(item + 1); // The index which was supposed to be the value
        }
    }
    return arr;
};