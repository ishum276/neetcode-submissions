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
        const arr=[]

        while(head!==null){
            arr.push(head);
            head=head.next;
        }
        if(arr.length<k) return arr[0];
        for(let i=0;i+k<=arr.length;i=i+k){
           
                let left=i;
                let right=i+k-1;;
                while(left<right){
                    [arr[left],arr[right]]=[arr[right],arr[left]]
                    left++;
                    right--;
                }
            

        }
        let i=0;
        const dummy = new ListNode(0);
        let current = dummy;
        while(i<arr.length){
            current.next=arr[i];
            current=current.next;
            i++;
        }
        current.next=null;
        return dummy.next;
    }
}
