class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        ans =[]
        carry = 1
        for i in range(len(digits)-1,-1,-1):
            if carry + digits[i]<=9:
                digits[i] +=carry
                return digits
            digits[i]=0
       
        
        return [1]+digits




