class Solution {
  
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let col = board[0].length , row = board.length;
        for(let i = 0 ; i<row;i++){
            if(!this.isValidRow(board[i])) return false;
        }
        for(let i = 0 ; i<col;i++){
            if(!this.isValidCol(board , i)) return false;
        }

        for(let i = 0 ; i<row ; i+=3){
            for(let j = 0 ; j<col ; j+=3){
                if(!this.isValidBox(board , i , j)) return false;
            }
        }
        return true;
    }
    /**
     * @param {character[]} board
     * @return {boolean}
     */
    isValidRow(row) {
        
        let st = new Set();
        for(let ch of row){
            if(ch==="."){
                continue;
            }
            if(st.has(ch))
            return false;
            st.add(ch);
        }
        return true;
    }
     /**
     * @param {character[][]} board
     * @param {number} col
     * @return {boolean}
     */
    isValidCol(board  , col) {
        let i = 0;
        let st = new Set();
        while(i<board.length){
            let curChar = board[i][col]
            if(curChar !=="."){
                if(st.has(curChar)){
                    return false;
                }
                st.add(curChar);
            }
            i++;
        }

        return true;

    }
     /**
     * @param {character[][]} board
     * @param {number} startRow
     * @param {number} startCol
     * @return {boolean}
     */
    isValidBox(board  , startRow , startCol) {
        let endRow= startRow+2 , endCol = startCol+ 2;
        let st = new Set();
        for(let i = startRow ; i<=endRow;i++){
            for(let j = startCol ; j<=endCol;j++){
                if(board[i][j] === "."){
                    continue;
                }
                if(st.has(board[i][j])) return false;
                st.add(board[i][j])
            }

        }
        return true;
    }


        



}
