/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* l = head , m = *head.next, r = *head.next.next;
        l.next = nullptr;
        while(m != nullptr){
            m.next=l;
            l=m;
            m=r;
            r=r.next;
        }
        head = l;
        
    }
};
