//Leetcode Problem 11 -> https://leetcode.com/problems/container-with-most-water/

//Solution 1

var maxArea = function(height) {
    let max = 0;
    let i =0, j = height.length-1;
    while(i<j){
        let area = (j-i)*Math.min(height[i], height[j]);
        if(max<area){
            max = area;
        }
        if(height[i]<height[j]){
            i++;
        }else {
            j--
        }
    }
    return max;
};

//Solution 2

var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let area = 0;
    while(left<right){
        area = Math.max(area , Math.min(height[left], height[right]) * (right-left))
        height[left] <= height[right]?left++:right--;
    }
    return area;
};