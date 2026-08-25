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
        let fast=head;
        let slow = head;
        while(fast!==null && fast.next!==null){
            fast=fast.next.next;
            slow=slow.next;
        }

        let prev=null;
        let current = slow;
        while(current!==null){
            const nextNode=current.next;
            current.next=prev;
            prev=current;
            current=nextNode;
        }

        let left= head;
        let right=prev;
        while(right.next!=null){
            const temp1=left.next;
            const temp2=right.next;
            left.next=right;
            right.next=temp1;
            left=temp1;
            right=temp2;
        }
    }
}
