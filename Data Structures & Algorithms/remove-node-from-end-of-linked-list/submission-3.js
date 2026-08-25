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
        if(head===null) return[];
        const arr=[];
        let current=head;
        while(current!==null){
            arr.push(current);
            current=current.next;
        }
        const toRemove= arr.length-n;
        if(toRemove===0){
            return head.next;
        }
        arr[toRemove-1].next=arr[toRemove+1]||null;
        return head;
    }
}
