class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  getSum(a, b) {
    let carry = 0, ans = 0;

    // Process all 32 bits
    for (let pos = 0; pos < 32; pos++) {
      let a_bit = (a >> pos) & 1;
      let b_bit = (b >> pos) & 1;

      // Full adder logic: sum of 3 bits (a_bit, b_bit, carry)
      let sum_bit = a_bit ^ b_bit ^ carry;

      // New carry: true if at least 2 of the 3 bits are 1
      carry = (a_bit & b_bit) | (a_bit & carry) | (b_bit & carry);

      // Set the bit in result if sum_bit is 1
      if (sum_bit) {
        ans |= (1 << pos);
      }
    }

    // In 32-bit signed arithmetic, any final carry is discarded (overflow)
    return ans;
  }
}
