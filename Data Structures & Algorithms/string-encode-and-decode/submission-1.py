class Solution:

    def encode(self, strs: List[str]) -> str:
        """
        Input: ["neet","code","love","you"]
        neet:;code:;love:;you:;
        """
        encoded = ""
        for s in strs:
            encoded += s + ":;"

        return encoded

    def decode(self, s: str) -> List[str]:
        ans = []
        current_str = ""
        i=0
        while i < len(s):
            if s[i] == ":" and s[i + 1] == ";":
                ans.append(current_str)
                i += 1
                current_str = ""
            else:
                current_str += s[i]
            i += 1

        return ans
