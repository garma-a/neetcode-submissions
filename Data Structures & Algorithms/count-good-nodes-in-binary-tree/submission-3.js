class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {number}
	 */
	goodNodes(root) {
		if (!root) return 0;
		/**
		 * @param {TreeNode} root
		 * @param {number} curmx
		 * @return {number}
		 */
		function dfs(root, curmx) {
			if (!root) return 0;
			let res = curmx <= root.val ? 1 : 0;
			if (root.left)
				res += dfs(root.left, Math.max(curmx, root.val))
			if (root.right)
				res += dfs(root.right, Math.max(curmx, root.val))
			return res;

		}
		return dfs(root, root.val);
	}
}
