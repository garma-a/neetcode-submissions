class Solution {
public:
    
 int search(vector<int>& nums, int target) {

        int l = 0, r = nums.size()-1 , ans = nums[0];
        while(l<=r){
              if(nums[l] < nums[r]){
                     vector<int> newVector(nums.begin() + l, nums.begin() + r+1);
                     int temp = normalBinarySearch(newVector, target);
                     return temp == -1 ? -1: temp+l;
              }

              int mid = (l+r)/2;
              if(nums[mid] == target) {
                     return mid;
              }else if(nums[l]>nums[mid]){
                     r = mid-1;
              }else{
                     l = mid+1;
              }
        }
        return -1;

}


int normalBinarySearch(vector<int>&nums , int target){
       int l = 0 , r = nums.size()-1 ;
       while(l<=r){
              int m = (r+l)/2;
              if(nums[m] == target){
                     return m;
              }else if(nums[m]<target){
                     l = m+1;
              }else{
                     r = m-1;
              }
       }
       return -1;
}

};
