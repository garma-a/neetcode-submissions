class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row_len, col_len = 9, 9
        for current_row in range(0, row_len):
            if not self.isValidRow(board[current_row]):
                return False
            for current_col in range(0, col_len):
                if current_row == 0 and not self.isValidCol(board, current_col):
                    return False
                if current_row % 3 == 0 and current_col % 3 == 0:
                    if not self.isValidSquare(board, current_row, current_col):
                        return False

        return True

    def isValidRow(self, arr: List[str]) -> bool:
        st = set()
        for ch in arr:
            if ch != ".":
                if ch not in st:
                    st.add(ch)
                else:
                    return False
        return True

    def isValidCol(self, arr: List[List[str]], colIndex: int) -> bool:
        st = set()
        for index in range(9):
            current_ch = arr[index][colIndex]
            if current_ch != ".":
                if current_ch not in st:
                    st.add(current_ch)
                else:
                    return False
        return True

    def isValidSquare(self, arr: List[List[str]], rowIndex, colIndex) -> bool:
        st = set()
        row_start, row_end, col_start, col_end = (
            rowIndex,
            rowIndex + 3,
            colIndex,
            colIndex + 3,
        )
        for row in range(row_start, row_end):
            for col in range(col_start, col_end):
                current_ch = arr[row][col]
                if current_ch != ".":
                    if current_ch not in st:
                        st.add(current_ch)
                    else:
                        return False
        return True
