#include <string>
#include <vector>
#include <deque>
#include <stdexcept>
#include <cstdlib> // for std::stoi

using namespace std;

class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        deque<int> stack;
        for (const string &token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                if (stack.size() < 2)
                    throw runtime_error("Not enough operands");
                int right = stack.back();
                stack.pop_back();
                int left = stack.back();
                stack.pop_back();
                int result = 0;
                if (token == "+") {
                    result = left + right;
                } else if (token == "-") {
                    result = left - right;
                } else if (token == "*") {
                    result = left * right;
                } else if (token == "/") {
                    result = left / right;
                }
                stack.push_back(result);
            } else {
                // Convert the token to an integer.
                int num = stoi(token);
                stack.push_back(num);
            }
        }
        if (stack.empty())
            throw runtime_error("Stack is empty");
        int finalResult = stack.back();
        stack.pop_back();
        return finalResult;
    }
};

