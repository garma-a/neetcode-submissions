class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int rowIndex = 0 , right= matrix[0].size()-1 , left = 0;
        while(rowIndex<matrix.size()-1 and target>matrix[rowIndex][right])rowIndex++;

        while(left<=right){
            int mid = (left+right)/2;
            if(matrix[rowIndex][mid]==target){
                return true;
            }else if(matrix[rowIndex][mid]>target){
                right--;
            }else left++;
        }
        return false;



        
    }
};
