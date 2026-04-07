class Solution {
public:
    static int jump(const std::vector<int>& nums) {
        int jumps = 0;
        int left = 0, right = 0;

        while (right < nums.size() - 1) {
            int farthest = 0;
            for (int i = left; i <= right; ++i) {
                farthest = std::max(farthest, i + nums[i]);
            }
            left = right + 1;
            right = farthest;
            ++jumps;
        }

        return jumps;
    }
};
