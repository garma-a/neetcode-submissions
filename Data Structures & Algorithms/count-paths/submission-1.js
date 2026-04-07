class Solution {
	/**
	 * @param {number} m
	 * @param {number} n
	 * @return {number}
	 */
	uniquePaths(m, n) {
		/**
		 * @type {number[][]}
		 */
		let table = new Array(m).fill(new Array(n).fill(1));
		for (let i = 1; i < m; i++)
			for (let j = 1; j < n; j++)
				table[i][j] = table[i - 1][j] + table[i][j - 1];

		return table[m - 1][n - 1];
	}


}
