class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0;
        let l = 0 , r=heights.length-1;
        while(l<r){
            let distance = r-l;
            ans= Math.max(ans ,distance* Math.min(heights[l],heights[r]) );
            if(heights[l]>heights[r]){
                r--;
            }else l++;
        }

        return ans;
    }
}
