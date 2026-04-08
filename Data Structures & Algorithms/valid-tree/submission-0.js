
class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    let mp = new Map();
    for (let i = 0; i < n; i++) mp.set(i, []);
    for (const [key, val] of edges) mp.get(key).push(val);
    let visited = new Set(), ans = true;

    function dfs(key) {
      if (visited.has(key)) { ans = false; return; }
      visited.add(key);
      for (let val of mp.get(key)) dfs(val);
    }
    dfs(0);
    return ans && visited.size === n;



  }
}
