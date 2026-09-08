class ListNode{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null; 
        this.prev=null;  
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity;
        this.map=new Map();
        this.head=new ListNode(0,0);
        this.tail= new ListNode(0,0);
        this.head.next=this.tail;
        this.tail.prev=this.head;
    }
    remove(node){
       node.next.prev= node.prev;
       node.prev.next= node.next;
    }
    insert(node){
        node.next=this.tail;
        node.prev= this.tail.prev;

        this.tail.prev.next=node;
        this.tail.prev=node;
    }
    

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)){
            return -1;
        }
        const node= this.map.get(key);
        this.remove(node);
        this.insert(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            const node=this.map.get(key);
            this.remove(node);
            node.value=value;
            this.insert(node);
            return ;
        }

        const node= new ListNode(key,value);
        this.insert(node);
        this.map.set(key,node);

        if(this.map.size>this.capacity){
            const node= this.head.next;
            this.remove(node);
            this.map.delete(node.key);
        }

    }
}
