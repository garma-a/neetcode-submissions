
class Solution {
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	combinationSum2(candidates, target) {
		//let index = 0;
		let answer = [];
		let buffer = [];
		candidates.sort((a, b) => a - b);
		function backtrack(curTotal = 0, index = 0) {
            if (curTotal === target) {
				answer.push([...buffer]);
				return;
			}
			if (curTotal > target || index >= candidates.length) return;
			
			for (let i = index; i < candidates.length; i++) {

				buffer.push(candidates[i]);
				backtrack(curTotal + candidates[i], i + 1);
				buffer.pop();
			}
		}
		backtrack();
		return answer.filter((curArr, i, twoDarray) => JSON.stringify(curArr) === JSON.stringify(twoDarray[i + 1]) ? false : true);
	}

}
