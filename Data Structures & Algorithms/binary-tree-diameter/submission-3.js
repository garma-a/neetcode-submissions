

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
		function diameterOfBinaryTreeHelper(root) {
			if (!root) return 0;
			const leftMaxLength = maxLengthOfBinaryTree(root.left);
			const rightMaxLength = maxLengthOfBinaryTree(root.right);
			const leftDiameter = diameterOfBinaryTreeHelper(root.left);
			const rightDiameter = diameterOfBinaryTreeHelper(root.right);
			return Math.max(leftMaxLength + rightMaxLength, leftDiameter, rightDiameter);
		}
		return diameterOfBinaryTreeHelper(root);
	}

}
