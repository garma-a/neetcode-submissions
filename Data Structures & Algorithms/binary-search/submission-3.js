class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0 , r = nums.length-1;
        while(l<=r){
            const mid = Math.round(l+(r-l)/2);
            if(nums[mid]===target)return mid;
            else if(nums[mid]>target) r--;
            else l++
        }
        return -1;
    }
}
