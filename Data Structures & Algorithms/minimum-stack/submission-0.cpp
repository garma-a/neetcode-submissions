class MinStack {
public:
   stack<int>st;
   stack<int>mnst;
    MinStack() {}
    
    void push(int val) {
        st.push(val);
        if(mnst.empty() or mnst.top()>val){
            mnst.push(val);
        }
        
    }
    
    void pop() {
        if(st.top()==mnst.top()){
            mnst.pop();
        }

        st.pop();
        
    }
    
    int top() {
        return st.top()
        
    }
    
    int getMin() {
        return mnst.top();
        
    }
};
