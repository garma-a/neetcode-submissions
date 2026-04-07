class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let numberOfPali = 0;
        for(let i =0 ; i<s.length;i++){
            for(let j =i ; j<s.length;j++){

                if(this.isPali(s.slice(i,j+1))){
                    
numberOfPali++;
                }

            }
        
        }
        return numberOfPali;

    }
        /**
     * @param {string} s
     * @return {boolean}
     */
    isPali(s){
        let l=0 , r=s.length-1;
        while(l<r){
            if(s[l] !== s[r])return false;
            l++;
            r--;
        }
        return true;

    }
}
