class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowSize = matrix[0].length , colSize = matrix.length;
        let l = 0 ,r= colSize-1;
        let ansRow = 0;
        while(l<=r){
            const mid = Math.round(l+(r-l)/2);
            const lastElementOnTheCurrentRow = matrix[mid][rowSize-1] ,
            firstElementOnTheCurrentRow = matrix[mid][0];
            if(target<=lastElementOnTheCurrentRow && target>=firstElementOnTheCurrentRow){
                ansRow = mid;
                break;
            }else if(target>lastElementOnTheCurrentRow){
                l = mid+1;
            }else r=mid-1;

        }
        l=0 , r = rowSize-1;
         while(l<=r){
            const mid = Math.round(l+(r-l)/2);
            if(matrix[ansRow][mid]===target)return true;
            else if(matrix[ansRow][mid]>target){
                r = mid-1;
            }else l = mid+1;

        }
        return false;
    }
}
