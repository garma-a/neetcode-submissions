
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
			if (!root) return null;
			if (curmx <= root.val)
				count++;
			if (root.left)
				dfs(root.left, Math.max(curmx, root.val))
			if (root.right)
				dfs(root.right, Math.max(curmx, root.val))

		}
		let count = 0;
		let mx = root.val;
		dfs(root, mx);
		return count;

	}
}
