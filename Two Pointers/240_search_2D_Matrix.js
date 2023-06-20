//Leetcode Problem 74 -> https://leetcode.com/problems/search-a-2d-matrix/
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == target){
                return true;
            }
        }
    }
    return false;
};

//Leetcode Problem 240 -> https://leetcode.com/problems/search-a-2d-matrix-ii/
var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix[0].length - 1;
    while(start < matrix.length && end >= 0){
        if(matrix[start][end] == target){
            return true;
        } else if(matrix[start][end] > target){
            end--;
        } else {
            start++;
        }
    }
    return false;
};