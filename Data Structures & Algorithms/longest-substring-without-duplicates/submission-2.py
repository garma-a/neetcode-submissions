class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l, r = 0, 0
        ans = 0
        count = {ch: 0 for ch in s}

        while r < len(s):
            if not count[s[r]]:
                count[s[r]] += 1
                ans = max(ans, (r - l) + 1)
                r += 1
            else:
                count[s[l]] -= 1
                l += 1

        return ans
