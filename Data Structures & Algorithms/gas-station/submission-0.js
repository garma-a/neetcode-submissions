
class Solution {
  /**
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    let total = 0, diffArray = [];
    for (let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i];
      diffArray.push(diff);
      total += diff
    }
    if (total < 0) return -1;
    for (let i = 0; i < gas.length; i++) {
      if (diffArray[i] > 0) return i;
    }


  }
}
