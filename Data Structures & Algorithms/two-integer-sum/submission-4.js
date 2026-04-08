class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		// target = num1 + num2 ;
		// num1 = target - num2;
		const mp = {};
		for (const num of nums) {
			mp[num] = (mp[num] || 0) + 1;
		}
		for (const num of nums) {

			if (mp[target - num]) {
				return [nums.indexOf((target - num)), nums.indexOf(num)]
			}
		};

	}

}