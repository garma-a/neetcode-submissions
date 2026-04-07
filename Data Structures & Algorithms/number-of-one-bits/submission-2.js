class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let counter = 0;
        while(n){
            if(n&1){
                counter++;
            }
            n>>=1;
        }
        return counter;
    }
}
