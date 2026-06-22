class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        const s = str.split(" ").join("").toLocaleLowerCase();
        let l = 0 , r = s.length - 1;
        while (l <= r) {
            if (!((s[l].charCodeAt(0) >= 97 && s[l].charCodeAt(0) <= 122) || (s[l].charCodeAt(0) >= 48 && s[l].charCodeAt(0) <= 57))) {
                l++;
                continue;
            }
            if (!((s[r].charCodeAt(0) >= 97 && s[r].charCodeAt(0) <= 122) || (s[r].charCodeAt(0) >= 48 && s[r].charCodeAt(0) <= 57))) {
                r--;
                continue;
            }
            if(s[l]!== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
