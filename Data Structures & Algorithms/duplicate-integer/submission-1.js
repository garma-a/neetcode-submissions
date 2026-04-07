class Solution {
	hasDuplicate(nums){
		const set = new Set();
		for (const num of nums) {
			set.add(num);
		}
		return (set.size !== nums.length);
	}
}

