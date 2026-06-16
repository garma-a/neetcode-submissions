class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = new Map()
        for (const num of nums){ // O(N)
            mp.set(num,((mp.get(num) || 0)+1));
           
        }
        const arr = Array.from({length:nums.length+1} , ()=>[]);
        for(let [num , f ] of mp.entries()){ // O(N)
            arr[f].push(num);
        }
        let ans = []
        for(let i = nums.length ; i>0 ; i--){
            
            while(arr[i].length>0 && ans.length<k){
                ans.push(arr[i][arr[i].length-1])
                arr[i].pop()
            }
            if(ans.length == k)
            return ans;
        

        }

        
    }
}
