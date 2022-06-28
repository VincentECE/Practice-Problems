/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //master plan: buy low sell high
    let maxProfit = 0;
    let minPurchase = prices[0];
    
    for(let i = 1; i < prices.length; i++) {
        let currentProfit = prices[i] - minPurchase;
        
        if(currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        
        if(prices[i] < minPurchase) {
            minPurchase = prices[i];
        }
    }
    
    
    
    return maxProfit;
};