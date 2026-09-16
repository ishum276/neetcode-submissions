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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const result=[];
        const queue= [root];
        while(queue.length){
            const level=[]
            const levelSize=queue.length;
            for(let i=0;i<levelSize;i++){
                const current=queue.shift();
                level.push(current.val);
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);


            }

            result.push(level);
        }
        return result;
        
    }
}
