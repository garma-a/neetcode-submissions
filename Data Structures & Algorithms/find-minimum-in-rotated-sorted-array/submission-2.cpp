class Solution {
public:
       int findMin(vector<int> &nums) {

        int l = 0, r = nums.size()-1 , ans = nums[0];
        while(l<=r){
            if (nums[l] < nums[r]) {
                ans = min(nums[l],ans);
                break;
            }
              int mid = (l+r)/2;
              ans = min(ans , nums[mid]);
              if(nums[mid]<nums[l]){
                     r = mid-1;
              }else{
                     l = mid+1;
              }
        }
        return ans;

}

};
