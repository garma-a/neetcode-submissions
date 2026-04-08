class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []

        def generate(left: int = 0, right: int = 0, sub: str = "") -> None:
            if len(sub) == n * 2:
                ans.append(sub)
                return
            if left < n:
                left += 1
                sub += "("
                generate(left, right, sub)
            if right < left:
                sub += ")"
                right += 1
                generate(left, right, sub)

        generate()

        return ans

