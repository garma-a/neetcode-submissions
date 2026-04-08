class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        		const table = new Array(cost.length).fill(0);
		[table[0], table[1]] = [cost[0], Math.min(cost[0], cost[1])];
		for (let i = 2; i < cost.length; i++) {
			table[i] = Math.min(cost[i - 1] + table[i - 1], cost[i - 2] + table[i - 2]);
		}
		return table[cost.length - 1];


    }
}
