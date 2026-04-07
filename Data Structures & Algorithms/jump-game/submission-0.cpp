class Solution {
public:
   static bool canJump(const std::vector<int>& nums) {
        int maxReach = 0;
        for (size_t i = 0; i < nums.size(); ++i) {
            maxReach = std::max(maxReach, nums[i]);
            if (maxReach == 0 && i < nums.size() - 1) {
                return false;
            }
            --maxReach;
        }
        return true;
    }
};
