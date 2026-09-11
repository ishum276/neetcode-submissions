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
    diameterOfBinaryTree(root) {
        if(root===null) return 0;
        let stack=[[root,false]];
        let height= new Map();
        let maxLength=0;
        while(stack.length>0){
            const [node,visited] = stack.pop();
            if(!node ) continue;
            if(!visited){
                stack.push([node,true]);
                stack.push([node.left,false]);
                stack.push([node.right,false]);
            }
            else{
                let left=height.get(node.left)||0;
                let right= height.get(node.right)||0;
                maxLength= Math.max(maxLength,left+right)
                height.set(node,1+Math.max(left,right))
            }
        }
        return maxLength;

    }
}
