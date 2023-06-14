//Leetcode Problem 121 -> https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let profit = 0;
    let left = 0;
    let right = 1;
    let currVal = 0;
    while(right < prices.length){
        if(prices[left]< prices[right]){
            currVal = prices[right] - prices[left];
            profit = Math.max(profit, currVal)
        } else {
            left = right
        }
        right+=1
    }
    return profit;
};