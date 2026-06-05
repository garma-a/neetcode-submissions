class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp = new Map()
        for(const str of strs){
            const key = str.split("").sort().join("");
            if(mp.has(key)){
                mp.get(key).push(str);
            }else{
                mp.set(key , [str]);
            }
        }
        const ans = [];
        for(const [key , val] of mp){
            ans.push(val);
        }
        return ans;
    }
}
