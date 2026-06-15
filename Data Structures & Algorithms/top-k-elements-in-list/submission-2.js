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
        const MaxHeap = new MaxPriorityQueue(element=>element[0]);
        for(let [key , value] of freq.entries()){ // O(N)
           MaxHeap.enqueue([value, key]);
        }
        let ans = [];
        for(let i = 0 ; i < k ; i++){
            const top = MaxHeap.dequeue();
            ans.push(top[1]);

        }
        return ans
        




    }
}
