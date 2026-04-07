

class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> ans(n, 0);
        vector<int> stack; // Stores indices of temperatures
        
        for (int i = 0; i < n; i++) {
            while (!stack.empty() && temperatures[i] > temperatures[stack.back()]) {
                int prev_index = stack.back();
                stack.pop_back();
                ans[prev_index] = i - prev_index;
            }
            stack.push_back(i);
        }
        
        return ans;
    }
};

