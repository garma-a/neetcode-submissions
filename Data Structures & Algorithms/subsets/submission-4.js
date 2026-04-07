class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
		subsets(nums) {
		const global = [];
		const stack = [[0, []]];
		while (stack.length) {
			const [idx, sub] = stack.pop();
			if (idx >= nums.length) {
				global.push([...sub]);
				continue;
			};
			stack.push([idx + 1, [...sub, nums[idx]]])
			stack.push([idx + 1, [...sub]]);
		}
		return global;

	}

}
