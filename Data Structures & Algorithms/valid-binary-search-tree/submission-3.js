class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {boolean}
	 */
	isValidBST(root) {
		if (!root.left && !root.right) return true;
		if (root.left && root.left.val >= root.val) return false;
		if (root.right && root.right.val < root.val) return false;
		if (root.left)
			return this.isValidBST(root.left)
		if (root.right)
			return this.isValidBST(root.right)
	}
}
