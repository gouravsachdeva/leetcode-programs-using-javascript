//Leetcode Problem 49 -> https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
    let hashMap = {};
    strs.forEach((str) => {
        let sortedStr = str.split('').sort().join('');
        if (hashMap[sortedStr]) {
            hashMap[sortedStr].push(str);
        } else {
            hashMap[sortedStr] = [str];
        }
    })

    return Object.values(hashMap);
};