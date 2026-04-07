class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @returns {number[][]}
	 */
	combinationSum(nums, target) {
		const global = [];
		const buffer = [];

		/**
		 * @param {number[]} nums
		 * @param {number[]} sub
		 * @returns {number[][]}
		 */
		function backtrack(total = 0, idx = 0) {
			if (total > target || idx >= nums.length) return;
			if (total === target) {
				global.push([...buffer]);
				return;
			}
			buffer.push(nums[idx])
			backtrack(total + nums[idx], idx)
			buffer.pop(nums[idx])
			backtrack(total, idx + 1)
		}
		backtrack()
		return global;
	}
}
