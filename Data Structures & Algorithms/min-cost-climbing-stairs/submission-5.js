class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        		const table = new Array(cost.length+1).fill(0);

		for (let i = 2; i <= cost.length; i++) {
			table[i] = Math.min(cost[i - 1] + table[i - 1], cost[i - 2] + table[i - 2]);
		}
		return table[cost.length];


    }
}
