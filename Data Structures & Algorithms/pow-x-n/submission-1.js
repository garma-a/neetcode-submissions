class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let res = this.pow(x,Math.abs(n))
        if (n<0)
        return 1/res;
        else return res;
       

    }
    pow(x,n){
        if(n==1)return x;
        return x * this.pow(x,n-1);
    }
}
