class Solution {
	/**
	 * @param {string} s1
	 * @param {string} s2
	 * @return {boolean}
	 */
	checkInclusion(s1, s2) {
		if (s2.length < s1.length) return false;
		let s1Array = new Array(26).fill(0);
		for (const c of s1) s1Array[c.charCodeAt(0) - "a".charCodeAt(0)]++;
		let [l, r] = [0, s1.length - 1];
		while (r < s2.length) {
			const currentSlidingArray = new Array(26).fill(0);
			for (let i = l; i <= r; i++) currentSlidingArray[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
			if (s1Array.every((cur,i) => cur===currentSlidingArray[i])) return true;
			l++;
			r++;
		}
		return false;

	}
}

