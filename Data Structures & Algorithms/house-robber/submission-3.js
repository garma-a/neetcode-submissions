
class Solution {
			rob(nums) {
		if (nums.length === 0) return 0;
		if (nums.length === 1) return nums[0];
		let table = new Array(nums.length).fill(0);
		table[0] = nums[0];
		table[1] = Math.max(nums[0], nums[1])
		for (let i = 2; i < nums.length; i++) {
			table[i] += Math.max(nums[i] + table[i - 2], table[i - 1]);
		}
		return table[nums.length - 1];



	}




	

}
