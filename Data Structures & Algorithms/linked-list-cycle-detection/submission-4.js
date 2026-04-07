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
     * @return {boolean}
     */
    hasCycle(head) {
        		if (!head) {
			return false;
		}

        		let slow= head;
		let fast= head.next;

				while (fast) {
			if (slow === fast) {
				return true;
			}
			slow = slow.next;
			if (fast.next) {
				fast = fast.next.next;
			} else {
				return false;
			}
		}



		return false;


    }
}
