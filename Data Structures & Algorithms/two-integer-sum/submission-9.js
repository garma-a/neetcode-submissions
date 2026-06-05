class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // a + b = target 
        //we have targe and a inside the for loop 
        // then we only search for b that become 
        // b  = target - a if we find b inside the array we can 
        // return the b and a so we need map for O(1) access
        const mp = new Map();
       // for(const [idx , num] of nums.entries()){
         //   mp.set(num , idx);
        //}
        for(const [idx,num] of nums.entries()){
            const key = target - num;
            if(mp.has(key)){
                return [idx , mp.get(key)];
            }else{
                mp.set(num , idx);
            }
        }
    }
}
