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
		for (let i = 0; i < nums.length; i++) {
			mp[nums[i]] = [(mp[nums[i]] || 0) + 1, i];
		}
		for (const num of nums) {

			if (mp[target - num] && mp[target - num][1] !== mp[num][1]) {
				return [mp[target - num][1], mp[num][1]]
			}
		};

	}

}

