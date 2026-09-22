class MaxHeap{
    constructor(){
        this.heap=[]
    }
    pop(){
        const max=this.heap[0];
        const last=this.heap.pop();
        if(this.heap.length===0) return max;
        this.heap[0]=last;
        let i=0;
        while(true){
            const left=2*i+1;
            const right= 2*i+2;
            let largest=i;
            if(left <this.heap.length &&this.heap[left][0]>this.heap[largest][0]) largest=left;
            if(right <this.heap.length &&this.heap[right][0]>this.heap[largest][0]) largest=right;
            if(i===largest) break;
            [this.heap[i],this.heap[largest]]=[this.heap[largest],this.heap[i]]
            i=largest;        
        }
        return max;
    }
    push(value){
        this.heap.push(value);
        let i=this.heap.length-1;
        while(i>0){
            const parent=Math.floor((i-1)/2)
            if(this.heap[parent][0]>=this.heap[i][0]) break;
            [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]]
            i=parent;
        }
    }
    size(){
        return this.heap.length;
    }
}
class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map=new Map();
        const heap= new MaxHeap();
        for(const task of tasks){
            map.set(task,(map.get(task)||0)+1);
        }

        for(const [task,count] of map){
            heap.push([count,task]);
        }

        const cooldown=[];
        let coolDownIndex=0;
        let time=0;
        while(heap.size()>0 || coolDownIndex<cooldown.length){
            while(coolDownIndex<cooldown.length && cooldown[coolDownIndex][0]<=time){
                const [,count,task] = cooldown[coolDownIndex++];
                heap.push([count,task]);
            }
            if(heap.size()===0){
                time=cooldown[coolDownIndex][0];
                continue;
            }
            const [count,task] = heap.pop();
            time++;
            if(count>1) cooldown.push([time+n,count-1,task])
        }
        return time;
    }
}
