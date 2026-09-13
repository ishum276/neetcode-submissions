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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(p,q){
            if(!p&& !q) return true;
            if(p &&q&& p.val===q.val)
            return isSameTree(q.left,p.left)&& isSameTree(q.right,p.right);
            else return false;
        }
        function dfs(root){
            if(!root) return false;
            if (!subRoot) return true;
            if(root.val=== subRoot.val) {
                if(isSameTree(root,subRoot)) 
                return true;
            };
            return dfs(root.left)||dfs(root.right);
        }
        return dfs(root);
    }
}
