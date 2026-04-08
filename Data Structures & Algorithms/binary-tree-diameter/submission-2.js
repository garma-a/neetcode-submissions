


class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {number}
	 */
			diameterOfBinaryTree(root) {
		function maxLengthOfBinaryTree(root) {
			if (!root) return null;
			const stack = [[root, 1]]
			let res = 0;
			while (stack.length) {
				const [top, depth] = stack.pop()
				res = Math.max(res, depth);
				if (top.left)
					stack.push([top.left, depth + 1]);
				if (top.right)
					stack.push([top.right, depth + 1]);
			}
			return res;
		}
		let res = 0;
		if (!root) return null;
		res = Math.max(res, maxLengthOfBinaryTree(root.left) + maxLengthOfBinaryTree(root.right));
		if (root.right)
			this.diameterOfBinaryTree(root.right);
		if (root.left)
			this.diameterOfBinaryTree(root.left);
		return res;
	}



}
