//Leetcode Problem 442 -> https://leetcode.com/problems/find-all-duplicates-in-an-array/
var findDuplicates = function (nums) {
    let start = 0;
    let n = nums.length;
    let set = new Set();
    while (start < n) {
        if (nums[start] != start + 1) {
            if (nums[start] != nums[nums[start] - 1]) {
                let temp = nums[start];
                nums[start] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
                set.add(nums[start]);
                start++;
            }
        }
        else {
            start++;
        }
    }
    return [...set];
};