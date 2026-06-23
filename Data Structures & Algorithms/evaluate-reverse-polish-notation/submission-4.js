class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                const pop1 = stack.pop();
                const pop2 = stack.pop();

                if (token == "+") {
                    stack.push(pop2 + pop1);
                } else if (token == "-") {
                    stack.push(pop2 - pop1);
                } else if (token == "*") {
                    stack.push(pop2 * pop1);
                } else stack.push(parseInt(pop2 / pop1));
            } else stack.push(parseInt(token));
        }
        return stack.pop();
    }
}
