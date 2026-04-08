class Solution:
    def climbStairs(self, n: int) -> int:
        if n==1 : return 1
        def dfs(num):
            if num > n:
                return 0
            if num == n:
                return 1
            return dfs(num+1) + dfs(num+2)
        return dfs(0)




