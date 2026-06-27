class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0)return 0;
        let st = new Set(nums);
        let ans = 1;
        for (let num of nums) {
            if(!st.has(num-1)){
            let curNum = num,counter = 1;
            while (st.has(curNum + 1)) {
                counter++;
                curNum +=1;
            }
            ans = Math.max(ans, counter);

            }
            
        }
        return ans;
    }
}
