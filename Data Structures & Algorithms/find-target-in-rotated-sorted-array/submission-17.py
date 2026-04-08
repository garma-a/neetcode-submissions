class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (r + l) // 2
            if nums[mid] <= nums[r]:
                r = mid - 1
            else:
                l = mid + 1
        pivot = l

        ans = self.binary(0, pivot - 1, target, nums)
        if ans != -1:
            return ans

        return self.binary(pivot, len(nums) - 1, target, nums)

    def binary(self, left: int, right: int, target: int, nums: List[int]) -> int:
        while left <= right:
            mid =(right + left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return -1
