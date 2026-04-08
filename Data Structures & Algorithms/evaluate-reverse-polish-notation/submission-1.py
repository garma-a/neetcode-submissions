
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        firstNum = int(tokens[0])
        for i in range(1, len(tokens), 2):
            num = int(tokens[i])
            operator = tokens[i + 1]
            if operator == "+":
                firstNum += num
            elif operator == "-":
                firstNum -= num
            elif operator == "*":
                firstNum *= num
            else:
                firstNum //= num

        return firstNum
