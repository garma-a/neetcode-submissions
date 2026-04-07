class Solution {
public:
  

std::vector<int> productExceptSelf(const std::vector<int>& nums) {
    int n = nums.size();
    std::vector<int> ans(n, 1);
    
    int pre_fix = 1;
    for (int i = 0; i < n; ++i) {
        ans[i] = pre_fix;
        pre_fix *= nums[i];
    }
    
    int post_fix = 1;
    for (int i = n - 1; i >= 0; --i) {
        ans[i] *= post_fix;
        post_fix *= nums[i];
    }
    
    return ans;
}

};
