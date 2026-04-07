#include <unordered_set>

class Solution {
public:
    bool isHappy(int n) {
        std::unordered_set<int> seen;
        int sum = 0;

        while (sum != 1) {
            if (seen.count(sum)) {
                return false;
            }
            seen.insert(sum);
            sum = 0;

            while (n != 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }

            n = sum;
        }

        return true;
    }
};

