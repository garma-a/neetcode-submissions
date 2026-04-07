class Solution:
    def countBits(self, n: int) -> List[int]:
        ans_arr = [0]*(n+1)
        for i in range(n+1):
            cur_num = i
            for j in range(10):
                ans_arr[i]+=(cur_num&1)
                cur_num>>=1
        return ans_arr



