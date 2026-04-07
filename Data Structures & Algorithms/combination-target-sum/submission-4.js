class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @returns {number[][]}
	 */
	combinationSum(nums, target) {
		const stack = [[0, 0, []]];
		const global = [];
		while (stack.length) {
			const [idx, total, sub] = stack.pop();
			if (idx >= nums.length || total > target) continue;
			if (total === target) {
				global.push([...sub]);
				continue;
			}
			stack.push([idx + 1, total, [...sub]]);
			stack.push([idx, total + nums[idx], [...sub, nums[idx]]]);
		}
		return global;
	}
}
