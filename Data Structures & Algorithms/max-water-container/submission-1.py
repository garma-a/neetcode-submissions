

class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r, heights_len = 0, 1, len(heights)
        ans = 0
        while r < heights_len:
            min_height = min(heights[l], heights[r])
            area = min_height * (r - l)
            ans = max(ans, area)
            if heights[r] > heights[l]:
                l = r
            r += 1

        return ans
