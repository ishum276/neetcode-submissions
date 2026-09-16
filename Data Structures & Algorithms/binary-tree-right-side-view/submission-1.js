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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const queue=[root];
        const result=[];

        while(queue.length){
            const levelSize=queue.length;
            for(let i=0;i<levelSize;i++){
                const current=queue.shift();
                if (i === levelSize - 1) {
                result.push(current.val);
            }
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right)
            }

        }

        return result;
    }
}
