class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()
        while n>1:
            if n in visited:
                return False
            n = self.sumOfSquareDigits(n)
            visited.add(n)
        return True
        

    def sumOfSquareDigits(self , n:int)->int:
        sum = 0
        while n>0:
            digit = n%10
            sum+=pow(digit,2)
            n//=10
        return sum

            

        