class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    let ans = "";
    function dfs(curIndex = 0, curStr = "") {
      // return if the idnex exceed the last char
      if (curIndex >= s.length) return
      // check if this str is palindrome
      let [l, r] = [0, curStr.length - 1];
      let isPalindrome = true;
      while (l < r) {
        if (curStr[l] !== curStr[r]) isPalindrome = false;
        l++;
        r--;
      }
      // keep the max str that we sure it is palindrome
      if (isPalindrome && curStr.length > ans.length) {
        ans = curStr;
      }
      // continue adding the next char to the current str
      dfs(curIndex + 1, curStr + s[curIndex])
      // remove the first char we have 
      dfs(curIndex + 1, curStr.slice(1))



    }
    dfs()
    return ans;



  }
}
