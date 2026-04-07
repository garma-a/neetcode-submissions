class Solution {
public:
   int characterReplacement(string s, int k) {
    int ans = 0, r = 0, max_freq = 0;
    vector<int> freq(26, 0); // Frequency array for 'A' to 'Z'

    for (int l = 0; l < s.size(); ++l) {
        while (r < s.size()) {
            freq[s[r] - 'A']++;
            max_freq = max(max_freq, freq[s[r] - 'A']); // Update max frequency

            // If window is invalid, break
            if ((r - l + 1) - max_freq > k) {
                freq[s[r] - 'A']--; // Undo last addition
                break;
            }

            ans = max(ans, (r - l + 1)); // Update answer with current valid window size
            r++; // Expand window
        }

        // Move left pointer, decreasing its frequency count
        freq[s[l] - 'A']--;
    }

    return ans;
}
};
