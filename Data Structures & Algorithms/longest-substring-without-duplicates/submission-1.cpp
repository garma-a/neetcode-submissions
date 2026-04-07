class Solution {
public:
   


 int lengthOfLongestSubstring(string s) {
       if (s.size() == 1) return 1;
       unordered_map<char , int>count;      
       int l = 0 , r = 1 , curans = 1 , result=0 ;
       count[s[l]]++;
       while(r<s.size()){
         if(count[s[r]] == 0){
              count[s[r]]++;
              curans++;
              r++;
         }else{
              while(count[s[r]]>0){
                     count[s[l]]--;
                     l++;
                     curans--;
              }              
         }

         result = max(result , curans);
       }

        return result;
        
    }

};
