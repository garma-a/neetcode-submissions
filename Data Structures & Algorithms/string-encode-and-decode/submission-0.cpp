
class Solution {
public:
    // Encode function
    static std::string encode(const std::vector<std::string>& strs) {
        std::string ans;
        for (const std::string& str : strs) {
            ans += std::to_string(str.length()) + ":" + str;
        }
        return ans;
    }

    // Decode function
    static std::vector<std::string> decode(const std::string& str) {
        std::vector<std::string> ans;
        size_t i = 0;

        while (i < str.size()) {
            // Find the position of ':'
            size_t end_of_integer = str.find(':', i);
            if (end_of_integer == std::string::npos) break;

            // Parse the length of the next string
            size_t size_of_the_str = std::stoul(str.substr(i, end_of_integer - i));

            // Move index to start of actual string
            i = end_of_integer + 1;

            // Extract the string
            std::string temp_str = str.substr(i, size_of_the_str);

            // Move index past the extracted string
            i += size_of_the_str;

            ans.push_back(temp_str);
        }
        return ans;
    }
};