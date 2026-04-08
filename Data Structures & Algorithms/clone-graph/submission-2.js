class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    if (!node) return node;
    let q = [node], visited = new Set(), oldToNew = new Map();
    while (q.length) {
      let top = q.pop();
      oldToNew.set(top, new Node(top.val));
      for (const neighbor of top.neighbors) {
        if (!visited.has(neighbor)) {
          q.push(neighbor);
          visited.add(top);
        }

      }
    }

    q = [node], visited = new Set();
    while (q.length) {
      let top = q.pop();
      for (const neighbor of top.neighbors) {
        oldToNew.get(top).neighbors.push(oldToNew.get(neighbor));
        if (!visited.has(neighbor)) {
          q.push(neighbor);
          visited.add(top);
        }

      }
    }
    return oldToNew.get(node);
  }
}

