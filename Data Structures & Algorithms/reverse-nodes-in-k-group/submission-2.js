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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        let temp=head;
        for(let i=0;i<k;i++){
            if(temp===null) return head;
            temp=temp.next;
        }

        let prev=null;
        let current=head;
        for(let i=0;i<k;i++){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        head.next=this.reverseKGroup(current,k);
        return prev;
    }
}
