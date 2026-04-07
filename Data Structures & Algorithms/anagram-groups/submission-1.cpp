
   class Solution {
public:
    
vector<vector<string>> groupAnagrams(vector<string>& strs) {
       
       unordered_map<string , vector<string>> mp;


       for (int i = 0 ; i<strs.size() ; i++){
              vector<int>count(26 , 0);
              for (auto ch : strs[i]){
                     count[ch - 'a']++;
              }
              string key = to_string(count[0]);
              for (auto num : count){
                     key+=','+to_string(num);
              }
              mp[key].push_back(strs[i]);
       }
        
             vector<vector<string>>ans;

             for(const auto &pair : mp){
               
                ans.push_back(pair.second);

             }
             return ans;

        
}
};

