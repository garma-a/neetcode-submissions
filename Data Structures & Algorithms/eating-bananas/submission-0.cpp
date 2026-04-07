

class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        if (piles.empty())
            return 0;

        int mx = *max_element(piles.begin(), piles.end());
        int l = 1, r = mx;
        int ans = mx;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (calcHours(mid, piles) > static_cast<long long>(h)) {
                l = mid + 1;
            } else {
                ans = mid;
                r = mid - 1;
            }
        }

        return ans;
    }

private:
    long long calcHours(int eating_rate, const vector<int>& piles) {
        long long hours_needed = 0;
        for (int num : piles) {
            // (num + eating_rate - 1) / eating_rate is the integer equivalent of ceil(num / eating_rate)
            hours_needed += (num + eating_rate - 1) / eating_rate;
        }
        return hours_needed;
    }
};

 