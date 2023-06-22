//Leetcode Problem 287 -> https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function(nums) {
    let start = 0;
    let n = nums.length;
    while (start < n) {
        if(nums[start] != start + 1){
            if (nums[start] != nums[nums[start] - 1]) {
                let temp = nums[start];
                nums[start] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
                return nums[start];
            }
        }
        else {
            start++;
        }
    }
};