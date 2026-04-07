class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {boolean}
	 */
	isValidBST(root) {
		function validate(node, mn, mx) {
			if (!node) return true;
			if (node.val <= mn)
				return false;
			if (node.val >= mx)
				return false;
			return validate(node.right, node.val, mx) &&
				validate(node.left, mn, node.val);
		}
		return validate(root, -Infinity, Infinity);

	}
}
