//Leetcode Problem 153 -> https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Solution 1
var findMin = function(nums) {
    let pivot = getPivot(nums);
    let end = nums.length-1;
    if(end >= 0 && pivot == -1) return nums[0];
    if(pivot >= 0 && pivot < end) return nums[pivot+1];
};

var getPivot = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
    let mid = Math.ceil((start+end)/2);
        if(mid > start && nums[mid] < nums[mid-1]) return mid-1;
        if(mid < end && nums[mid] > nums[mid+1]) return mid;
        if(nums[mid] <= nums[start]) {
            end = mid - 1;
        } else if (nums[mid] > nums[start]){
            start = mid + 1;
        }
    }
    return -1;
}

//Solution 2
var findMin = function(nums) {
    let left = 0, right = nums.length-1;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        if(nums[right] >= nums[mid]) {
            right = mid
        } else {
            left = mid+1
        }
    }
    return nums[left]
};
