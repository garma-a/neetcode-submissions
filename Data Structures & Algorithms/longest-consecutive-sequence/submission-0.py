class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        st = set()
        ans, ctr, prevNum = 0, 0, nums[0]
        for num in nums:
            st.add(num)
        while len(st) > 0:
            if prevNum in st:
                ctr += 1
                st.remove(prevNum)
            else:
                prevNum = st.pop()
                ctr = 1
            ans = max(ans, ctr)
            prevNum += 1
        return ans
