
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const arr=[];
    for(let list of lists){
        while(list!==null){
            arr.push(list.val)
            list=list.next;
        }
    } 
    arr.sort((a,b)=>a-b);
    const dummy = new ListNode(0,null);
    let current=dummy;
    for(let i=0;i<arr.length;i++){
        let val=arr[i];
        current.next= new ListNode(val,null);
        current=current.next;
    }
    return dummy.next;
    }
    
}
