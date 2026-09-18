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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return "";
        function dfs(root){
            if(!root) return '#*';
            const left=dfs(root.left);
            const right=dfs(root.right);
            return  `#${root.val}`+left+right;
        }
        return dfs(root);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data==="") return null;
        // else return new TreeNode(data)
        const values = data.split('#').filter(Boolean);
        let i=0;
        function dfs(){
            if(i>=values.length) return null;
            const value=values[i++];
            if(value==='*') return null;
            const root= new TreeNode(Number(value));
            root.left= dfs();
            root.right=dfs();
            return root;
        }
        return dfs();

    }
}
