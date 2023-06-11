//Leetcode Problem 238 -> https://leetcode.com/problems/product-of-array-except-self/

//Itration Method O(N^2)

var productExceptSelf = function(nums) {
    let finalArray = [];
    if(nums.length>1){
        for(let i = 0; i<nums.length; i++){
            let product = 1;
            for(let j = 0; j<nums.length; j++){
                if(i!==j){
                    product *= nums[j];
                }
            }
            finalArray.push(product);
        }
        return finalArray;
    }
    return finalArray;
};

//Optimized Method O(N)

var productExceptSelf = function(nums) {
    let left = [];
    if(nums.length>1){
        for(let i = 0; i<nums.length; i++){
            if(left[i-1] == undefined){
                left[i] = nums[i];
            } else {
                left[i] = left[i-1] * nums[i];
            }
        }
        let tempVal = 1;
        for(let j = nums.length-1; j>=0; j--){
            if(left[j+1] == undefined){
                left[j] = left[j-1];
                tempVal = nums[j];
            } else {
                left[j] = (left[j-1] === undefined? 1:left[j-1]) * tempVal;
                tempVal *= nums[j];
            }
        }
        return left;
    }
    return left;
};