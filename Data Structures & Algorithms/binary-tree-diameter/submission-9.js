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
        let maxdepth = 0 ;
    
        
        const dfs = (root)=>{
            if(!root)return 0
            let left = dfs(root.left) ,right= dfs(root.right);
            maxdepth = Math.max(maxdepth ,left+right );
            return Math.max(left , right)+1;
            }


            dfs(root)
            return maxdepth
    }
   
}
