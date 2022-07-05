//Leetcode Problem 347 -> https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums, k) {
    let newArray = [];
    let hashMap = {};
    if (nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            if (hashMap[nums[i]]) {
                hashMap[nums[i]]++;
            } else {
                hashMap[nums[i]] = 1;
            }
        }
        newArray = Object.keys(hashMap).sort((a, b) => {
            return hashMap[b] - hashMap[a];
        })
        newArray.splice(k, newArray.length - 1);
    }
    return newArray;
};