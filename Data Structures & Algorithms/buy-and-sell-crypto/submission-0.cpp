class Solution {
public:
   
 int maxProfit(vector<int>& prices) {

        int l = 0, r = 0 , ans = 0;

        while(r<prices.size()){

               ans = max(ans, prices[r] - prices[l]);
               if (prices[l] > prices[r])
                      l++;

               r++;
        }
        return ans;
 }

};
