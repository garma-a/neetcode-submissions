
class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    if (intervals.length === 0) return intervals;
    intervals.sort((el1, el2) => el1[0] - el2[0]);
    let output = [intervals[0]];
    for (const [s, e] of intervals.slice(1)) {
      const [firsts,firste] = output.at(-1);
      if (s<=firste) output.splice(-1,1, [Math.min(s, firsts), Math.max(e, firste)]);
      else output.push([s, e]);
    }
    return output;
  }
}
