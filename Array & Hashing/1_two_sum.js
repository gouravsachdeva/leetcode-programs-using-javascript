//Leetcode Problem 1 -> https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    if (nums.length > 1) {
        let newObj = {};
        for (let item = 0; item < nums.length; item++) {
            let secondItem = target - nums[item];
            if (newObj[secondItem] !== undefined) {
                return [newObj[secondItem], item];
            }
            newObj[nums[item]] = item;
        }
    }
};