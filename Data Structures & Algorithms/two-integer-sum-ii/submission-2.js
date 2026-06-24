class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0 , r = numbers.length-1;
        while(l<r){
            if(numbers[r]+numbers[l] === target) return [l+1,r+1];
            if(numbers[r]+numbers[l]>target) r--;
            else if (numbers[r] + numbers[l] < target)l++;
        }
    }
}
