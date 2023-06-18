//Leetcode Problem 122 -> https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i<prices.length; i++){
        if(prices[i]>prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }
    return profit;
};