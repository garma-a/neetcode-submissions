class Solution:
    def climbStairs(self, n: int) -> int:
        if n==1 : return 1
        map :Mapping[int,int]= {}
        def dfs(num)->int:
            if num > n:
                return 0
            if num == n:
                return 1
            if map.get(num):
                return map[num]
            map[num]= dfs(num+1) + dfs(num+2)
            return map[num]
        return dfs(0)

