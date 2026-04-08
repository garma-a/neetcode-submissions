class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		let counts = {}, countt = {};

		for (const ch in s) {
			counts = (counts[s[ch]] || 0) + 1;
			countt = (countt[t[ch]] || 0) + 1;
		}

		for (const key in counts) {
			if (counts[key] !== countt[key]) {
				return false;
			}

		}

		return true;


	}
}
