class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        left, right = 0, len(matrix)
        row = 0
        while left <= right:
            mid = left + (right - left) // 2
            if matrix[mid][0] > target:
                right = mid - 1
            elif matrix[mid][-1] < target:
                left = mid + 1
            else:
                row = mid
                break

        left, right = 0, len(matrix[row])

        while left <= right:
            mid = left + (right - left) // 2
            if matrix[row][mid] < target:
                left = mid + 1
            elif matrix[row][mid] > target:
                right = mid - 1
            else:
                return True

        return False
