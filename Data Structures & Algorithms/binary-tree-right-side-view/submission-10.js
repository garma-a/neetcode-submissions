
class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {number[]}
	 */
	rightSideView(root) {
		if (!root) return [];
		const stack = [root];
		const ans = [root.val];
		while (stack.length) {
			const top = stack.pop();
			if (top.right) {
				ans.push(top.right.val);
				stack.push(top.right);
			} else if (top.left) {
				ans.push(top.left.val);
				stack.push(top.left);
			} else break;
		}
		return ans;
	}
}
