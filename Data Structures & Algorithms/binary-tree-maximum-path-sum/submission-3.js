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
    maxPathSum(root) {
        let maxSum =-Infinity;
        function dfs(root){
            if(!root) return 0;
            const left= Math.max(0,dfs(root.left))
            const right= Math.max(0,dfs(root.right));
            const pathThroughRoot = root.val+left+right;
            maxSum = Math.max(maxSum,pathThroughRoot);
            return root.val+Math.max(left,right);
        }

        dfs(root);
        return maxSum;

    }
}
