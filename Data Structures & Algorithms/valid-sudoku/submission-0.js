class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows=new Map();
        const cols=new Map();
        const boxes = new Map();

        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                const value = board[r][c];
                if(value === '.')
                continue;
                
                const boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}`;
                if(!rows.has(r)) rows.set(r,new Set());
                if(!cols.has(c)) cols.set(c,new Set());
                if(!boxes.has(boxKey)) boxes.set(boxKey,new Set());


                if(rows.get(r).has(value)||cols.get(c).has(value)||boxes.get(boxKey).has(value))
                return false;

                rows.get(r).add(value);
                cols.get(c).add(value);
                boxes.get(boxKey).add(value);
            }
        }

        return true;
    }
}
