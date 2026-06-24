class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let ans = [];

        for(let i = 0 ; i<nums.length;i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i+1 , r = nums.length-1;
            while(l<r){
                let curSum = nums[i] + nums[r]+nums[l];
                if(curSum === 0) {
                    ans.push([nums[i] , nums[r] , nums[l]]); 
                    l++;
                    r--;
                    while(l<r && nums[l]===nums[l-1])l++;
                    }
                else if(curSum>0)r--;
                else l++;

            }

        }
        return ans;
    }
}
