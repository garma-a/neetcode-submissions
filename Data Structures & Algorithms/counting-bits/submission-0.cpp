#include <vector>
using namespace std;

vector<int> countBits(int n) {
    vector<int> dp(n + 1, 0);
    int offset = 1;

    for (int curnum = 1; curnum <= n; curnum++) {
        if (offset * 2 == curnum) {
            offset = curnum;
        }
        dp[curnum] = 1 + dp[curnum - offset];
    }

    return dp;
}
