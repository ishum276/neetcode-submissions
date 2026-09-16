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
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return 0;
        const queue=[[root,root.val]];
        let result=0;
        while(queue.length){
            const [current,maxSoFar] = queue.shift();
            if(current.val>=maxSoFar){
                result++;
            }
            const newMax= Math.max(current.val,maxSoFar)
            if(current.left) queue.push([current.left,newMax])
            if(current.right) queue.push([current.right,newMax])
        }
        return result;
    }
}
