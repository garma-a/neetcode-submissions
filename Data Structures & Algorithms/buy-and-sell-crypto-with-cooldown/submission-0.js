class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = {} ;
        function dfs(i=0, isBuy = true){
           
            if (i >= prices.length) return 0;
            const key = `${i}:${isBuy}`;
            if (memo[key] !== undefined) return memo[key];
            let cooldown = dfs(i + 1, isBuy);
            let ans = 0;
            if(isBuy)
                memo[key] = Math.max(dfs(i + 1, false) - prices[i], cooldown);
            else 
            memo[key] = Math.max(dfs(i + 2, true) + prices[i], cooldown);
           
            return memo[key];
        }

        return dfs()

    }
}
