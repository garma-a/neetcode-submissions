class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) return 0;
    let output = intervals.sort((a, b) => a[0] - b[0]).slice();
    let ans = 0, l = 0, r = 1;
    while (r < output.length) {
      const [fs, fe] = intervals[l];
      const [s, e] = intervals[r];
      if (s < fe) {
        ans++;
        const firstLength = fe - fs, secondLength = e - s;
        if (secondLength >= firstLength) l++; r++;
      }
      l++; r++;
    }
    return ans;
  }
}
