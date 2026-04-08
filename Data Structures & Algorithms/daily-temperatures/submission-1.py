
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        size = len(temperatures)
        ans, st = [0] * size, [0]

        for i in range(1, size):
            top = st.pop()
            if temperatures[top] < temperatures[i]:
                ans[top] = i - top
            else:
                st.append(top)
            st.append(i)
        while len(st) > 1:
            prev, cur = st.pop(), st.pop()
            if temperatures[cur] < temperatures[prev]:
                ans[cur] = prev - cur
                st.append(prev)
            else:
                st.append(cur)

        return ans


