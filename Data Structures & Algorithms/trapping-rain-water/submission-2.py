
class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        max_left_hight = [height[0]] * len(height)
        for i in range(len(height)):
            max_left_hight[i] = max(max_left_hight[i], height[i])
        max_right_height = [height[len(height) - 1]]
        for i in range(len(height) - 1, -1, -1):
            max_right_height[i] = max(max_right_height[i], height[i])
        res = 0
        for i in range(len(height)):
            res += min(max_left_hight[i], max_right_height[i]) - height[i]

        return res
