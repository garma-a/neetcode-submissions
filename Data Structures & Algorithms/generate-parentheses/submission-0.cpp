class Solution {
public:
    vector<string>ans;
    string curStr;
    vector<string> generateParenthesis(int n) {
        helper(n , 0 , 0);
        return ans;
        
        
    }

    void helper(int n, int left , int right){
        if (curStr.size() == n*2 ){
            ans.push_back(curStr);
            return;
        }
        if(left<n){
            curStr +='(';
            helper(n , left+1 , right);
            curStr.pop_back();
        }
        if (right<left){
            curStr+=')';
            helper(n , left , right+1);
            curStr.pop_back();
            
        }


    }
};
