class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	productExceptSelf(nums) {
		const pre = new Array(nums.length).fill(1);
		const post = new Array(nums.length).fill(1);
		for (let i = 1; i < nums.length; i++) {
			pre[i] = pre[i - 1] * nums[i - 1];
		}

		for (let i = nums.length - 2; i >= 0; i--) {
			post[i] = post[i + 1] * nums[i + 1];

		}
		const result = new Array(nums.length).fill(1);
		for (let i = 0; i < nums.length; i++) {
			result[i] = pre[i] * post[i];
		}

		return result;
	}
}

