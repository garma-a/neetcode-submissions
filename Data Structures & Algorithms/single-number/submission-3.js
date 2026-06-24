class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let ans = 0;
     for(let num of nums)  ans ^= num;
     return ans;
    }
}
