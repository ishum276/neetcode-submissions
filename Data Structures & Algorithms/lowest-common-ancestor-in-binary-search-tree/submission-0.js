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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function findPath(root,target,path){
            if(!root) return false;
            path.push(root);

            if(root===target) return true;
            if(findPath(root.left,target,path)||findPath(root.right,target,path)) return true;

            path.pop();
            return false;
        }

        const pathP=[];
        const pathQ=[];
        findPath(root,p,pathP);
        findPath(root,q,pathQ);

        let i=0;
        while(i<pathP.length && i<pathQ.length && pathP[i]===pathQ[i]){
            i++;
        }
        return pathQ[i-1];
    }
}
