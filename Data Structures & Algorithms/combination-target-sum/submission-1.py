class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []

        def backtrack(i: int, subset: List[int], total: int):
            if i >= len(subset) or total > target:
                return
            
            subset.append(nums[i])
            backtrack(i, subset, total + nums[i])
            subset.pop()
            backtrack(i + 1, subset, total - nums[i])

        backtrack(0, [], 0)

        return ans
