class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {boolean}
	 */
	isValidBST(root) {
		function validate(node, mn = -Infinity, mx = Infinity) {
			if (!node) return true;
			if (node.val <= mn || node.val > mx) return false;
			return validate(root.left, mn, node.val) && validate(root.right, node.val, mx)
		}
		return validate(root);
	}
}
