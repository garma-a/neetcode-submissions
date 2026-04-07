#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    static vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> sub;
        backtracking(nums, 0, result, sub);
        return result;
    }

private:
    static void backtracking(vector<int>& nums, int index, vector<vector<int>>& result, vector<int>& sub) {
        if (index == nums.size()) {
            result.push_back(sub);
            return;
        }

        // Include current element
        sub.push_back(nums[index]);
        backtracking(nums, index + 1, result, sub);
        sub.pop_back(); // Backtrack

        // Exclude current element
        backtracking(nums, index + 1, result, sub);
    }
};

