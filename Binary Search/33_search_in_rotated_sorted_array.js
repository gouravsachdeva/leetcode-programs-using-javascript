//Leetcode Problem 33 -> https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
    let start = 0;
    let end = nums.length -1;
    let pivotIndex = getPivot(nums);
    if(pivotIndex == -1) return binarySearch(nums, target, start, end);
    if(nums[pivotIndex] == target) {
        return pivotIndex;
    }
    if(target >= nums[start]){
        return binarySearch(nums, target, start, pivotIndex);
    } else {
        return binarySearch(nums, target, pivotIndex, end);
    }
};

var getPivot = function(nums) {
    let start = 0;
    let end = nums.length -1;
    while(start <= end){
        let mid = Math.ceil((start+end)/2)
        if(mid < end && nums[mid] > nums[mid+1]){
            return mid
        } 
        if(mid > start && nums[mid] < nums[mid-1]){
            return mid-1;
        } 
        if(nums[mid] <= nums[start]){
            end = mid - 1;
        } else if(nums[mid] > nums[start]){
            start = mid + 1;
        }
    }
    return -1;
};

var binarySearch = function(nums, target, start, end) {
    while(start <= end){
        let mid = Math.ceil((start+end)/2)
        if(target < nums[mid]){
            end = mid-1;
        } else if(target > nums[mid]){
            start = mid+1;
        } else if(target == nums[mid]){
            return mid;
        }
    }
    return -1
};