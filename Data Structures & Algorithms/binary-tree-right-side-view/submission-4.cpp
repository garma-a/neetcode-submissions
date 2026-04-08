/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int> ans;
        return helper(root ,&ans );

        
    }
    vector<int> helper(TreeNode* curNode , vector<int>*ans){
        if(curNdoe == nullptr){
            return ans;
        }
        ans.push_back(curNode->right);
        helper(curNode->right , ans);
    }
};
