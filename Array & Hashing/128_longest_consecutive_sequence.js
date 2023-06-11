//Leetcode Problem 128 -> https://leetcode.com/problems/longest-consecutive-sequence/
//Solution Try 1

var longestConsecutive = function(nums) {
    let count = 0;
    let obj = {};
    let newArr = [];
    let temp = 0;
    let totalCount = 0;
    if(nums.length>0){
        for(let i=0; i<nums.length; i++){
            if(!obj[nums[i]]){
                obj[nums[i]] = true;
            }
        }
        newArr = Object.keys(obj);
        newArr.sort((a,b) => {
            return a-b;
        })
        temp = parseInt(newArr[0]);
    }
    debugger;
    for(let i = 0; i< newArr.length; i++){
        if(temp == newArr[i]) {
            count++;
            temp+=1;
        } else {
            count = 1;
            temp = parseInt(newArr[i])+1;
        }
        if(totalCount < count){
            totalCount = count;
        }
    }
    return totalCount;
};

// Optimized Soluiton

var longestConsecutive = function(nums) {
    if(!nums.length) return 0;

    const set = new Set(nums)
    let max = 0;

    for(let num of set){
        if(set.has(num-1)) continue;

        let currNum = num;
        let currMax = 1;

        while(set.has(currNum+1)){
            currNum++;
            currMax++;
        }

        max = Math.max(max, currMax)
    }
    return max;
};