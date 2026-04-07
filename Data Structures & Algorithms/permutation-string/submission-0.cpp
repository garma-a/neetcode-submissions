class Solution {
public:
    static bool checkInclusion(string s1, string s2) {
        int len1 = s1.size(), len2 = s2.size();
        if (len1 > len2) return false;

        vector<int> s1_freq(26, 0), window_freq(26, 0);

        // Count frequency of characters in s1
        for (char ch : s1) {
            s1_freq[ch - 'a']++;
        }

        // Sliding window over s2
        for (int i = 0; i < len2; i++) {
            // Add the current character to the window
            window_freq[s2[i] - 'a']++;

            // Remove the leftmost character when the window size exceeds s1's length
            if (i >= len1) {
                window_freq[s2[i - len1] - 'a']--;
            }

            // Check if the window matches s1's frequency
            if (window_freq == s1_freq) {
                return true;
            }
        }

        return false;
    }
};

