class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
      let left=0;
      let cols= matrix[0].length;
      let rows =matrix.length;
      let right = rows*cols -1;
      while(left<=right){
        const mid = left + Math.floor((right-left)/2);
        let row= Math.floor(mid/cols);
        let col = mid%cols;
        let value = matrix[row][col]
        if(target === value){
            return true;
        }
        else if(target<value){
            right= mid-1;
        }
        else left= mid+1;
      }
      return false;
    }
}
