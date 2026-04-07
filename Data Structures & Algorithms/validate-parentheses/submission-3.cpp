class Solution {
public:
   



bool isValid(string s) {
       stack<char> st;
       
       for (auto ch : s) {
       if (ch == '{'){
              st.push('{');
       } else if( ch == '('){
              st.push('(');
       } else if (ch == '['){
              st.push('[');
       }else if (ch == '}'){
              if (!st.empty() and st.top()=='{'){
                     st.pop();
              }else {
                     return false;
              }
       }else if (ch == ']'){
              if (!st.empty() and st.top()=='['){
                     st.pop();
              }else {
                     return false;
              }
       }else if (ch == ')'){

              if (!st.empty() and st.top()=='('){
                     st.pop();
              }else {
                     return false;
              }
       }
       }
       return st.empty();
       

    }

};
