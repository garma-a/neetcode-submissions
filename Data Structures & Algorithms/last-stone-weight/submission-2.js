//const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();
        for(const stone of stones){
            heap.enqueue(stone);
        }
        while(heap.size()>1){
            const [first , second] = [heap.dequeue() , heap.dequeue()];
            heap.enqueue(Math.abs(first-second));
        }
        return heap.dequeue();
        
        
    }
}
