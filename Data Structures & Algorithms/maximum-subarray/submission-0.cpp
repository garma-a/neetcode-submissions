class Solution {
public:
   int maxSubArray(std::vector<int>& nums) {
    int mx_sum = nums[0]; // Initialize with the first element
    int cur_sum = 0;

    for (int num : nums) {
        cur_sum = std::max(0, cur_sum) + num; // Reset if cur_sum is negative
        mx_sum = std::max(mx_sum, cur_sum);
    }

    return mx_sum;
}
};
