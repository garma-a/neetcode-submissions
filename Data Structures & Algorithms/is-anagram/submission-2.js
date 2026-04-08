class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		const mp = {};
		for (const ch of s) {
			mp.ch = 1;
		}
		for (const ch of t) {
			if (mp?.ch !== 1) {
				return false;
			}

		}
		return true;


	}
}
