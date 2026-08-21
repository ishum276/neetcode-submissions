class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++){
            let left=0;
    let right= matrix[i].length-1;
    while(right>=left){
        let middle= Math.floor((left+right)/2);
        if(target===matrix[i][middle]){
            return true;
        }
        else if(target<matrix[i][middle]){
            right=middle-1;
        }
        else{
            left =middle+1;
        }
    }
        }return false;
    }
}
