class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        st = set()
        mn = float("inf")
        for num in nums:
            st.add(num)
            mn = min(mn, num)

        ans, ctr, prevNum = 0, 0, mn
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
