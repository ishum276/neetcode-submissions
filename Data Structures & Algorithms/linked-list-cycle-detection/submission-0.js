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
      let current= head;
      let side = head;
      while(side!==null && side.next!==null){
       
       side=side.next.next;
       current=current.next
       if(side===current) return true;
      }
      return false;
    }
}
