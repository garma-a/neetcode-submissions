class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int size = nums.size();
        int missing_number = (size * (size + 1)) / 2;

        for (int num : nums) {
            missing_number -= num;
        }

        return missing_number;
    }
};
