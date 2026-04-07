
class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    let mp = new Map();
    for (let i = 0; i < n; i++) mp.set(i, []);
    for (const [key, val] of edges) {
      mp.get(key).push(val);
      mp.get(val).push(key);
    }
    let visited = new Set(), ans = true;

    function dfs(key, parent) {
      if (visited.has(key)) { ans = false; return; }
      visited.add(key);
      for (let val of mp.get(key)) {
        if (val !== parent) dfs(val, key);
      }
    }
    dfs(0, -1);
    return ans && visited.size === n;

  }
}

