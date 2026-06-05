class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp = new Map();
        for (const str of strs) {
            const freq = new Array(26).fill(0);
            for (let idx = 0; idx < str.length; idx++) {
                const key = str.charCodeAt(idx) - 97;
                freq[key]++;
            }
            const freqStr = freq.join(",");
            if (!mp.has(freqStr)) {
                mp.set(freqStr, []);
            }
            mp.get(freqStr).push(str);

        }
        return Array.from(mp.values());
    }
}
