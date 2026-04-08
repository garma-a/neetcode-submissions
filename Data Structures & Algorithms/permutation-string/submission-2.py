class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        st = set(s1)
        l = 0
        # s1="ab"
        # s2="eidboaoo"
        for r in range(len(s2)):
            if s2[r] in st:
                st.remove(s2[r])
                if (r - l) + 1 == len(s1):
                    return True
            elif s2[r] not in st:
                while l < r:
                    st.add(s2[l])
                    l += 1
                l += 1

        return False
