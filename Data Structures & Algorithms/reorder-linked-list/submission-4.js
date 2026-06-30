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
     * @return {void}
     */
    reorderList(head) {
        const [prevMid , mid] = this.findMid(head);
        prevMid.next = null;
        let revNode = this.reverse(mid);
        let ans = head , temp = head;
        while(temp && revNode){
            const tempNext = temp.next;
            const revNext = revNode.next;
            temp.next =revNode;
            revNode.next = tempNext;
            temp = tempNext;
            revNode = revNext;
          

        }
        
        
        return ans;


    }
     /**
     * @param {ListNode} head
     * @return {ListNode[]}
     */
    findMid(head){
        let prevSlow = null, slow  = head , fast = head ;
        while(fast && fast.next){
            prevSlow = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (fast) return [slow, slow.next];
        return [prevSlow,slow];
    }
     /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverse(head){
        let pre = null , cur = head;
        while(cur){
            const temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
        return pre;
    }
}
