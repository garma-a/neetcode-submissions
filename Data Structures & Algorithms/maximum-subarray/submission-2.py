
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        total = 0
        cur_mx= 0
        for num in nums:
            if total<0:
                total = 0
            total+=num
        return total
