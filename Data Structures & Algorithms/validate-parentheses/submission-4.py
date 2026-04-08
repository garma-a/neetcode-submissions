class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            if ch == "[" or ch == "(" or ch == "{":
                stack.append(ch)
            else:
                top = stack.pop()
                if ch == "]" and top == "[":
                    continue
                elif ch == ")" and top == "(":
                    continue
                elif ch == "}" and top == "{":
                    continue
                else:
                    return False

        return True
