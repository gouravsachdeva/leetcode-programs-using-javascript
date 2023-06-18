//Leetcode Problem 34 -> https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Solution 1
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length -1;
    if(nums.length > 0 && target <= nums[end]){
        while(start <= end){
            let mid = Math.ceil((start+end)/2);
            if(target < nums[mid]){
                end = mid-1
            } else if(target > nums[mid]){
                start = mid+1;
            } else {
                let smallIndex = mid;
                let largeIndex = mid;
                while(nums[smallIndex] === target){
                    smallIndex -=1;
                }
                while(nums[largeIndex] === target){
                    largeIndex +=1;
                }
                if(smallIndex == largeIndex){
                    return [smallIndex + 1 , -1]
                } else return [smallIndex + 1, largeIndex - 1];
            }
        }
    }
    return [-1, -1]
};

//Solution 2
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    let start  = search(nums, target, true);
    let end = search(nums, target, false);
    ans[0] = start;
    ans[1] = end;
    return ans;
};

var search = ((nums, target, isStartIndex) => {
    let ans = -1;
    let start = 0;
    let end = nums.length -1;
    if(nums.length > 0 && target <= nums[end]){
        while(start <= end){
            let mid = Math.ceil((start+end)/2);
            if(target < nums[mid]){
                end = mid-1
            } else if(target > nums[mid]){
                start = mid+1;
            } else {
                ans = mid;
                if(isStartIndex){
                    end = mid-1;
                } else {
                    start = mid+1;
                }
            }
        }
    }
    return ans;
})