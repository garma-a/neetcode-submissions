#include <vector>

class Solution {
public:
    std::vector<std::vector<int>> permute(std::vector<int>& nums) {
        std::vector<std::vector<int>> result;
        std::vector<int> sub;
        std::vector<bool> used(nums.size(), false);
        
        backtracking(nums, sub, result, used);
        
        return result;
    }

private:
    void backtracking(std::vector<int>& nums, std::vector<int>& sub, 
                      std::vector<std::vector<int>>& result, std::vector<bool>& used) {
        if (sub.size() == nums.size()) {
            result.push_back(sub);
            return;
        }

        for (size_t i = 0; i < nums.size(); ++i) {
            if (used[i]) continue;  // Skip used numbers
            
            used[i] = true;
            sub.push_back(nums[i]);
            backtracking(nums, sub, result, used);
            used[i] = false;
            sub.pop();
        }
    }
};

