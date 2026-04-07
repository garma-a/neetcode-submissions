#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> counter;
        for (int num : nums) {
            counter[num]++;
        }

        int size = nums.size();
        vector<vector<int>> bucket(size + 1);

        for (const auto& [num, freq] : counter) {
            bucket[freq].push_back(num);
        }

        vector<int> ans;
        ans.reserve(k);

        while (k > 0) {
            while (bucket[size].empty()) {
                size--;
            }
            ans.push_back(bucket[size].back());
            bucket[size].pop_back();
            k--;
        }

        return ans;
    }
};

