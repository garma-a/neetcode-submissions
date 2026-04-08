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
        return helper(root ,ans )

        
    }
    vector<int> helper(TreenNode * curNode , ans vector<int>){
        if(curNdoe == nullptr){
            return ans;
        }

        helper(curNode->right , ans.push_back(curNode->right));
    }
};
