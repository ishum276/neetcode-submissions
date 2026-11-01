class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const cols= board[0].length;
        const rows=board.length;
        function backtrack(i,j,index){
            if(index===word.length) return true;
            if(i>=rows || j>=cols || i<0 || j<0 ||board[i][j]!==word[index]) return false;
            const temp = board[i][j];
            board[i][j] = "#";
           const found = backtrack(i,j+1,index+1)||
            backtrack(i+1,j,index+1)||
            backtrack(i-1,j,index+1)||
            backtrack(i,j-1,index+1);
            board[i][j] = temp;
            return found;
        }
       for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (backtrack(i, j, 0)) return true;
    }
}

return false;
    }
}
