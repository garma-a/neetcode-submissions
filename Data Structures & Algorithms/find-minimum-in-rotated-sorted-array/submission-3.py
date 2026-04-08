class Solution:
    def findMin(self, nums: List[int]) -> int:
        ans = nums[0]

        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            ans = min(nums[mid], ans)
            if nums[mid] <= nums[left]:
                right = mid - 1
            else:
                left = mid + 1

        return ans
