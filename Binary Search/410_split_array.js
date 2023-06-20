//Leetcode Problem 410 -> https://leetcode.com/problems/split-array-largest-sum/

var splitArray = function(nums, k) {
    let start = 0;
    let end = 0;

    for(let i = 0; i<nums.length; i++){
        start = Math.max(start, nums[i]); // In the end of the loop it will conrain the max item from the array
        end += nums[i];
    }

    //Binary search
    while(start < end){
        // try for the middle as a potential answer
        let mid = Math.floor((start + end)/2);
        console.log(mid);
        //calculate how many pieces we can devide this in with the max sum
        let sum = 0;
        let pieces = 1;

        for(let num of nums){
            if((sum + num) > mid){
                //you can not this in this subarray make a new one
                //say you add this num in new subarray, then sum = num
                sum = num;
                pieces++;
            } else {
                sum += num;
            }
        }
        if(pieces > k){
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return end; // here start == end
};