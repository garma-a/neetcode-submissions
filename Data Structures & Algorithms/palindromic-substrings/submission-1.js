class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        function middleExpand(left , right){
            let numberOfPalindromes = 0;
            while(left >=0 && left<s.length && right<s.length && right>=0){
                if(s[left]===s[right]) numberOfPalindromes++;
                left--;
                right++;
            }
            return numberOfPalindromes;

        }
        let ans = 0;
        for(let i = 0 ; i<s.length ; i++){
            let oddPali = middleExpand(i,i);
            let evenPali = middleExpand(i,i+1);
            ans += oddPali + evenPali;


        }
        return ans;
   

    }
    
}
