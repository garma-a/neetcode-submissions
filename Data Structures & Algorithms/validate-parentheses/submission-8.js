class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let ch of s) {
            if (ch === "[" || ch === "(" || ch === "{") {
                stack.push(ch);
            }
            else if (stack.length > 0) {
                if (ch == "]") {
                    if (stack[stack.length - 1] !== "[") {
                        return false;
                    } else stack.pop();
                }
                if (ch == "}") {
                    if (stack[stack.length - 1] !== "{") {
                        return false;
                    } else stack.pop();
                }
                if (ch == ")") {
                    if (stack[stack.length - 1] !=="(") {
                        return false;
                    } else stack.pop();
                }
            } else return false;
        }
        return stack.length == 0;
    }
}
