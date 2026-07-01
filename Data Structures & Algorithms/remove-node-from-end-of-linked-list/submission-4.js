/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let prv = null , cur = head , ptr = head;
        while(n>0){
            ptr = ptr.next;
            n--;
        }
        while(ptr){
            prv = cur;
            cur = cur.next;
            ptr = ptr.next;
        }
        if (prv) {
            prv.next = cur.next;
        } else {
            return head.next; 
        }
        return head

    }
}
