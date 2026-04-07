class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        		if (this.keyStore.get(key)) {
			this.keyStore.set(key, [...this.keyStore.get(key), [value, timestamp]]);
		} else {
			this.keyStore.set(key, [[value, timestamp]]);
		}

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        		const currentArr = this.keyStore.get(key);
		if (!currentArr) return "";
		let [l, r] = [0, currentArr.length-1];
				let ans = "";
		while (l <= r) {
			const mid = Math.floor(l + (r - l) / 2);
			
			if (currentArr[mid][1] <= timestamp) {
                ans = currentArr[mid][0];
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
		return ans;




    }
}
