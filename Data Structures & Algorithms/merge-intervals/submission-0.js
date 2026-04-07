
class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    if (intervals.length === 0) return intervals;
    intervals.sort((el1, el2) => el1[0] - el2[0]);
    let s = intervals[0][0], e = intervals[0][1], res = [];
    for (let i = 1; i < intervals.length; i++) {
      const [curs, cure] = intervals[i];
      if (curs <= e) {
        e = Math.max(e, cure);
      } else {
        res.push([s, e]);
        [s, e] = [curs, cure];
      }

    }
    res.push([s, e])
    return res;
  }
}
