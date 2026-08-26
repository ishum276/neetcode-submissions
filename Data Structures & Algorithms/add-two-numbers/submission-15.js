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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let carry=0;
        let current=dummy;
        while(l1!==null || l2!==null || carry!==0){
            const digit1= l1?l1.val : 0;
            const digit2= l2? l2.val:0;
            let sum= digit1+ digit2+ carry;
            carry= Math.floor(sum/10);
            current.next=new ListNode(sum%10);
            current=current.next;

            if(l1)l1=l1.next;
            if(l2)l2=l2.next;
        }
        return dummy.next;
    }
}
