class Solution {
public:
  void reorderList(ListNode *head) {
    if (!head || !head->next || !head->next->next) return;

    ListNode *mid = find_middle(head);
    ListNode *reversed = reverse_list(mid->next);
    mid->next = nullptr;

    ListNode *temp = head;
    while (reversed) {
      ListNode *tmp1 = temp->next;
      ListNode *tmp2 = reversed->next;

      temp->next = reversed;
      reversed->next = tmp1;

      temp = tmp1;
      reversed = tmp2;
    }
  }

  ListNode *find_middle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast != nullptr && fast->next != nullptr) {
      fast = fast->next->next;
      slow = slow->next;
    }
    return slow;
  }

  ListNode *reverse_list(ListNode *head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
      ListNode* next_node = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next_node;
    }
    return prev;
  }
};

