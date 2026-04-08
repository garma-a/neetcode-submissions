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
        ans = [];
        helper(root , ans)
        return ans;
    }
    helper(root , ans){
        if(root != null){
            ans.push(root);
            helper(root.right , ans);
        }
return ans;
        
        
    }
}
