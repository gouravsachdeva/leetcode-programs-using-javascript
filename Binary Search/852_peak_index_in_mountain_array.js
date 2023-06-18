//Leetcode Problem 852 -> https://leetcode.com/problems/peak-index-in-a-mountain-array/

var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.ceil((start + end)/2);
        if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]) {
            return mid;
        } else if(arr[mid-1] < arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};