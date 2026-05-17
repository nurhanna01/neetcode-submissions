class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length:9},()=>new Set())
        const col = Array.from({length:9},()=>new Set())
        const square = Array.from({length:9},()=>new Set())
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(board[i][j]!='.'){
                    if( row[i].has(board[i][j]) || col[j].has(board[i][j]) || square[(Math.floor(i/3)*3+Math.floor(j/3))].has(board[i][j])){
                        return false
                    }
                    row[i].add(board[i][j])
                    col[j].add(board[i][j])
                    square[(Math.floor(i/3)*3+Math.floor(j/3))].add(board[i][j])
                }
            }
        }
        return true        
    }
}
