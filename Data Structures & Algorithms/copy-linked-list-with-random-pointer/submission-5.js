// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let current=head;
        const map= new Map();
        while(current){
            map.set(current,new Node(current.val));
            current=current.next;            
        }
        current= head;
        while(current){
            let copy = map.get(current);
            copy.next= current.next?map.get(current.next):null;

            copy.random = current.random ? map.get(current.random):null;
            current=current.next;
        }
        return map.get(head)
    }
}
