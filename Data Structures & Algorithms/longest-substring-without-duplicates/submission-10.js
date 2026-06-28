class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0 , r = 0;
        let st = new Set();
        let mxSize = 0;
        while(r<s.length){
           while(st.has(s[r])){
            st.delete(s[l]);
            l++;
           }
           st.add(s[r])
           r++;
           mxSize = Math.max(mxSize , st.size);
        }
        return mxSize;
    }
}
