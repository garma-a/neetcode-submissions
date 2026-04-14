class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let  memo ={};
        coins.sort((a,b)=>b-a)

        function dfs(curAmount=0 , steps=0){
            if(memo[curAmount]!==undefined)return memo[curAmount];
            if(curAmount >amount)return -1;
            if(curAmount===amount)  return 0;
            let mn = Infinity
            for(let num of coins) {
                let ans = dfs(num+curAmount , steps+1)
                if(ans !== -1) mn = Math.min(mn , ans+1);
            }
            memo[curAmount] = mn
            return mn
        }
        let finalAns = dfs();
        return finalAns === Infinity ? -1 : finalAns;


    }
}
