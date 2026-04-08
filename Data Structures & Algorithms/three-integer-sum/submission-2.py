class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ans = []
        nums.sort()
        prev = None
        for index in range(len(nums)):
            if prev == nums[index]:
                continue
            prev = nums[index]
            left, right = index + 1, len(nums) - 1
            while left < right:
                if nums[index] + nums[left] + nums[right] == 0:
                    ans.append([nums[index], nums[left], nums[right]])
                    right -= 1
                elif nums[index] + nums[left] + nums[right] > 0:
                    right -= 1
                else:
                    left += 1
        return ans

