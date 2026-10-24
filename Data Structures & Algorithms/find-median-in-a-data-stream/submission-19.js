class Heap{
    constructor(compare){
        this.heap=[];
        this.compare=compare;
    }
    push(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1);

    }
    bubbleUp(index){
        while(index>0){
            const parent= Math.floor((index-1)/2);
            if(!this.compare(this.heap[index],this.heap[parent])){
                break;
            }
            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent;
        }
    }
    pop(){
        if(this.heap.length<1) return undefined;
        const top= this.heap[0];
        const last= this.heap.pop();
        if(this.heap.length>0){
            this.heap[0]=last;
            this.bubbleDown(0)
        }

        return top;
    }
    bubbleDown(index){
        const n=this.heap.length;
        while(true){
            const left=2*index+1;
            const right=2*index+2;
            let best=index;
            if(left<n && this.compare(this.heap[left],this.heap[best])){
                best=left;
            }
            if(right<n && this.compare(this.heap[right],this.heap[best])){
                best=right;
            }
            if(best===index) break;
            [this.heap[best],this.heap[index]]=[this.heap[index],this.heap[best]]
            index=best;
        }
    }
    peek(){
        return this.heap[0];
    }
    size(){
        return this.heap.length;
    }

}
class MedianFinder {
    constructor() {
          this.small = new Heap((a,b)=>a>b)
          this.large = new Heap((a,b)=>a<b)
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
  
    addNum(num) {
        this.small.push(num);
        this.large.push(this.small.pop())
        if(this.small.size()<this.large.size()){
            this.small.push(this.large.pop())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.small.size()>this.large.size()) return this.small.peek();
        return (this.small.peek()+this.large.peek())/2;
    }
}
