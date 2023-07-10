//Leetcode Problem 20 -> https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    const openingParentheses = new Set(['(', '[', '{']);
    const matchingParentheses = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];

    for (let char of s) {
        if (openingParentheses.has(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== matchingParentheses[char]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
};