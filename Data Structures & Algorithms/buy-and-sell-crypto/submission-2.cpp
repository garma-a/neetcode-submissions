class Solution {
public:
   
 int maxProfit(vector<int>& prices) {

        int l = 0, r = 0 , ans = 0;

        while(r<prices.size()){

               if (prices[l] >= prices[r])
                      l++;
               ans = max(ans, prices[r] - prices[l]);

               r++;
        }
        return ans;
 }

};
