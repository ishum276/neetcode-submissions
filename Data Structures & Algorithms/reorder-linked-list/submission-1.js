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
       if(head===null) return;
       const arr=[];
       while(head!==null){
        arr.push(head);
        head=head.next;
       }
       let left=0;
       let right=arr.length-1;
       while(left<right){
        arr[left].next=arr[right];
        left++;
        if(left===right) break;

        arr[right].next=arr[left];
        right--;
       }
       arr[left].next=null;
    }
}
