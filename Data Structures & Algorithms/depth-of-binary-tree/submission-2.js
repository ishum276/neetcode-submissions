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
    maxDepth(root) {
        if(!root) return 0;
        const queue =[root];
        let i=0;
        let depth=0;
        while(i<queue.length){
            const levelSize=queue.length-i;
            for(let j=0;j<levelSize;j++){
                const node=queue[i++];
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            depth++;
        }
        return depth;
    }
}
