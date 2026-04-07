class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       		let mxProfit = 0;
		let curNum = prices[0];
		for (const price of prices) {
			curNum = Math.min(curNum, price);
			mxProfit = Math.max(mxProfit, Math.abs(curNum - price));
		}
		return mxProfit;


    }
}
