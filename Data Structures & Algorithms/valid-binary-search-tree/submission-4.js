/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        if(!root) return false;
        const queue=[[root,-Infinity,Infinity]];
        while(queue.length){
            
            const [current,min,max]=queue.shift();
            if(current.val<=min || current.val>=max)
            return false;

            if(current.left) queue.push([current.left,min,current.val]);
            if(current.right) queue.push([current.right,current.val,max]);

        }
        return true;
    }
}
