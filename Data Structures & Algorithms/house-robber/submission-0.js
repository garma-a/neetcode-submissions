
class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	rob(nums) {
		let [even, odd] = [0, 0];
		for (const [i, num] of nums.entries()) {
			if (i % 2 === 0) {
				even += num;
			} else {
				odd += num;
			}
		}
		return Math.max(even, odd);


	}
}
