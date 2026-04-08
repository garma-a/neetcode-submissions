class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  getSum(a, b) {
    let carry = 0, ans = 0, pos = 0;
    while (pos < 32) {
      let a_bit = a & 1, b_bit = b & 1;
      let sum_bit = a_bit ^ b_bit ^ carry;
      carry = (a_bit & b_bit) | (a_bit & carry) | (b_bit & carry);
      if (sum_bit) {
        ans |= (1 << pos);
      }
      a >>= 1;
      b >>= 1;
      pos++;

    }
    if (carry) {
      ans |= (1 << pos);
    }
    return ans;

  }
}
