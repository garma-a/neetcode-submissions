
class Solution {
	/**
	 * @param {TreeNode} root
	 * @param {number} k
	 * @return {number}
	 */
	kthSmallest(root, k) {
		/**
		 * @param {TreeNode} root
		 * @param {number} k
		 * @param {number} num 
		 * @return {number}
		 */
		function inorder(root) {
			if (!root || count >= k) return 0;
			inorder(root.left, k);
			count++;
			if (count === k) {
				result = root.val;
				return;
			}
			inorder(root.right, k);
		}
		let [count, result] = [0, -1];
		inorder(root, k);
		return result;
	}
}
