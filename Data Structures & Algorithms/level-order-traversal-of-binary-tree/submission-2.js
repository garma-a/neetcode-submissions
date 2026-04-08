class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {number[][]}
	 */
	levelOrder(root) {
		if (!root) return [];
		const q = [root];
		const ans = [];
		let fixed = 1;
		while (q.length) {
			if (q.length % fixed === 0) {
				ans.push(Array.from(q, (el) => el.val));
				fixed += fixed;
			}
			const top = q.shift();
			if (top.left)
				q.push(top.left);

			if (top.right)
				q.push(top.right);
		}
		return ans;
	}
}
