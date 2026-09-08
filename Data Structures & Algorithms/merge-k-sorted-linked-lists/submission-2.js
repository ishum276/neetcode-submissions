/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class MinHeap{
    constructor(){
        this.heap=[];
    }
    pop(){
        if(this.heap.length ===0) return null;
        if(this.heap.length ===1 ) return this.heap.pop();

        const result=this.heap[0];
        this.heap[0]=this.heap.pop();
        let i=0;
        while(true){
           let left = 2*i+1;
           let right= 2*i+2;
           let smallest=i;
           if(left<this.heap.length && this.heap[left].val<=this.heap[smallest].val){
            smallest=left;
           }
            if(right<this.heap.length && this.heap[right].val<=this.heap[smallest].val){
            smallest=right;
           }
           if(smallest===i) break;

           [this.heap[smallest],this.heap[i]]=[this.heap[i],this.heap[smallest]]
            i=smallest;
        }
        return result;
    }
    push(node){
        this.heap.push(node);
        let i=this.heap.length-1;
        while(i>0){
        let parent = Math.floor((i-1)/2)
        if(this.heap[parent].val<=this.heap[i].val){
        break;}
        [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]]
        i=parent;
        }
    }
    isEmpty(){
        return this.heap.length===0;
    }
}
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const heap= new MinHeap();
        for(let list of lists){
            if(list!==null){
                heap.push(list);
            }
        }

        const dummy= new ListNode(0);
        let current =dummy;
        while(!heap.isEmpty()){
            const node= heap.pop();
            current.next=node;
            current=current.next;

            if(node.next!==null){
                heap.push(node.next);
            }
        }
        return dummy.next;
    }
}
