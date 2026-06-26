class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      
        let maxProfit = 0;
        let minPrice = Infinity;
     for(let price of prices){
        if(price>minPrice) {
            maxProfit = Math.max(maxProfit , price-minPrice);
        }
        if(minPrice>price){
            minPrice = price;
        }
        
        

     }
     return maxProfit;
    }
}
