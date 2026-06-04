class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const smp = new Map() , tmp= new Map();
    
        for (const ch of s) {
            smp.set(ch, (smp.get(ch) || 0) + 1);
        }
        
       
        for (const ch of t) {
            tmp.set(ch, (tmp.get(ch) || 0) + 1);
        }
        for(const [key , val] of smp){
            if(!tmp.has(key) || val !== tmp.get(key)){
                return false;
            }
        }
        return true;

    }
}
