var Solution = /** @class */ (function() {
    function Solution() {
    }
    Solution.prototype.lengthOfLongestSubstring = function(s) {
        var ascii = new Array(128).fill(0);
        var _a = [0, 0], prev = _a[0], cur = _a[1];
        var mxLen = 0;
        while (cur < s.length) {
            var curIndex = s[cur].charCodeAt(0) - "a".charCodeAt(0);
            if (ascii[curIndex] > 0) {
                while (ascii[curIndex] > 0 && prev < cur) {
                    var leftIndex = s[prev].charCodeAt(0) - "a".charCodeAt(0);
                    ascii[leftIndex]--;
                    prev++;
                }
            }
            ascii[curIndex]++;
            cur++;
            mxLen = Math.max(mxLen, cur - prev);
        }
        return mxLen;
    };
    return Solution;
}());
