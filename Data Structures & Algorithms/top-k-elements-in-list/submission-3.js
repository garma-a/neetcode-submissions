class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map()
        for (const num of nums){ // O(N)
            freq.set(num,((freq.get(num) || 0)+1));
           
        }
        const minHeap = new MinPriorityQueue(element=>element[1]);
        for(let [key , value] of freq.entries()){ 
            minHeap.enqueue([key, value]);
            if(minHeap.size()>k)
            minHeap.dequeue();
          
        }
        let ans = [];
        for(let i = 0 ; i < k ; i++){
            const [key,freq] = minHeap.dequeue();
            ans.push(key);

        }
        return ans;
        




    }
}
