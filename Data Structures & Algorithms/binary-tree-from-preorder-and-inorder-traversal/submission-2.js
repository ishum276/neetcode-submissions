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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preOrder, inOrder) {

        const inOrderMap= new Map();
        let preOr=0;
        for(let i=0;i<inOrder.length;i++){
            inOrderMap.set(inOrder[i],i);
        }
        function dfs(left,right){
            if(left>right) return null;
            
            const rootValue= preOrder[preOr++];
            const root= new TreeNode(rootValue);
            const mid=inOrderMap.get(rootValue);
            root.left= dfs(left,mid-1);
            root.right= dfs(mid+1,right);
            return root;
        }
        return dfs(0,inOrder.length-1);
    }
}
