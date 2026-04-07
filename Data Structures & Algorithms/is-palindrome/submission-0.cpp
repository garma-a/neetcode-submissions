class Solution {
public:
    bool isPalindrome(const std::string& s) {
    std::string lower;
    
    // Convert to lowercase and filter only alphanumeric characters
    for (char c : s) {
        if (std::isalnum(c)) {
            lower += std::tolower(c);
        }
    }
    
    if (lower.empty()) {
        return true;
    }

    int l = 0, r = lower.size() - 1;
    while (l < r) {
        if (lower[l] != lower[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
}
};
