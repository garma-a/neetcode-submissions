class Solution {
public:


int trap(vector<int>& heights) {
    int len = heights.size();
    if (len == 0) return 0; // Edge case: empty input

    // Preallocate left max vector
    vector<int> mx_vec_left(len);
    int mx = heights[0];
    for (int i = 0; i < len; i++) {
        mx = max(mx, heights[i]);
        mx_vec_left[i] = mx;
    }

    // Preallocate right max vector
    vector<int> mx_vec_right(len);
    mx = heights[len - 1];

    // Fill right max from back to front
    for (int i = len - 1; i >= 0; i--) {
        mx = max(mx, heights[i]);
        mx_vec_right[i] = mx;
    }

    int ans = 0;

    // Compute trapped water
    for (int i = 0; i < len; i++) {
        int temp = min(mx_vec_left[i], mx_vec_right[i]) - heights[i];
        if (temp > 0) {
            ans += temp;
        }
    }

    return ans;
}

};
