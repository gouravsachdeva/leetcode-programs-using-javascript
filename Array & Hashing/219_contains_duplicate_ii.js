//Leetcode Problem 217 -> https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // Check if the difference between duplicates is less than k
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};