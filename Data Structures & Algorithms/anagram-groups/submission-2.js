class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	groupAnagrams(strs) {
		const res = {};
		for (const str of strs) {
			const arr = new Array(26).fill(0);
			for (const ch of strs)
				arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
			if (!res[key]) {
				res[key] = [];
			}
			res[key].push(str);
		}
		return Object.values(res);
	}
}
