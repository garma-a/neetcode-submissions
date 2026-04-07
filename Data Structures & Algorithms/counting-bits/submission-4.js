class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let ans = [0];
        for(let i = 1 ; i<=n;i++){
            let currentNum = i;
            let currentCounter = 0;
            while(currentNum){
                if(currentNum&1){
                    currentCounter++;
                }
                currentNum>>=1;

            }
            ans.push(currentCounter);
            
        }
        return ans;
    }
}
