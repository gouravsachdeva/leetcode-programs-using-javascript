//Leetcode Problem 167 -> https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function (numbers, target) {
    if (numbers.length > 1) {
        let start = 0, end = numbers.length - 1;
        while (start < end) {
            if (numbers[start] + numbers[end] < target) {
                start++;
            } else if (numbers[start] + numbers[end] > target) {
                end--;
            } else {
                return [start + 1, end + 1];
            }
        }
    }
};