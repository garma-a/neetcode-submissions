class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()
        while n > 1:
            if n in visited:
                return False
            visited.add(n)
            n = self.sumOfSquareDigits(n)
            
        return True
        

    def sumOfSquareDigits(self , n:int)->int:
        total_sum = 0
        while n>0:
            digit = n%10
            total_sum+=pow(digit,2)
            n//=10
        return total_sum

            

        