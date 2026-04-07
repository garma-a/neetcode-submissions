class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	subsets(nums) {
		const global = [];
		/**
		 * @param {number[]} nums
		 * @param {number[]} subset
		 * @return {number[][]}
		 */
		function backtrack(nums, subset = []) {
			if (!nums.length) {
				global.push([...subset]);
				return;
			}
			backtrack(nums.slice(1), [...subset])
			backtrack(nums.slice(1), [...subset, nums[0]]);
		}
		backtrack(nums);
		return global;
	}
}
