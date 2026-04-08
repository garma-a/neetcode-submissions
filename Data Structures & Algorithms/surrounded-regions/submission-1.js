class Solution {
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (i === 0 || j === 0 || i === board.length - 1 || j === board.length - 1)
          continue
        board[i][j] = "X";

      }
    }
    return board;



  }
}
