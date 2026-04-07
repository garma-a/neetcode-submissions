class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        		let [l, r] = [0, nums.length - 1];
		while (l < r) {
			const mid = Math.floor(l + (r - l) / 2);
			if (nums[mid] > nums[r]) {
				l = mid + 1;
			} else {
				r = mid;
			}
		}
		let pivot = l;
		let index = this.binary_search(nums, target, 0, pivot);
		index = index === -1 ?  this.binary_search(nums, target, pivot, nums.length):index;
		return index;

    }
    	binary_search(nums, target, start, end){
		let [l, r] = [start, end == nums.length ? end - 1 : end];
		while (l <= r) {
			const mid = Math.floor(l + (r - l) / 2)
			if (nums[mid] == target) {
				return mid;
			} else if (nums[mid] > target) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
		return -1;
	}

}
