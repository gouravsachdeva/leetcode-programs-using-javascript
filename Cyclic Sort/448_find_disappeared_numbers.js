//Leetcode Problem 448 -> https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function (nums) {
    let arr = [];
    let start = 0;
    let n = nums.length;
    while (start <= n) {
        if (nums[start] <= n && nums[start] != nums[nums[start] - 1] && nums[start] != start + 1) {
            let temp = nums[start];
            nums[start] = nums[temp - 1];
            nums[temp - 1] = temp;
        } else {
            start++;
        }
    }
    console.log(nums)
    for (let item = 0; item < n; item++) {
        if (nums[item] != item + 1) {
            arr.push(item + 1);
        }
    }
    return arr;
};