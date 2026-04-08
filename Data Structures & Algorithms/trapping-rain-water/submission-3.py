class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        if n == 0:
            return 0
        max_left_hight = [height[0]] * n
        for i in range(n):
            max_left_hight[i] = max(max_left_hight[i], height[i])
        max_right_height = [height[n - 1]]
        for i in range(n - 1, -1, -1):
            max_right_height[i] = max(max_right_height[i], height[i])
        res = 0
        for i in range(n):
            res += min(max_left_hight[i], max_right_height[i]) - height[i]

        return res
