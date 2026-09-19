class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap=[];
        function Push(value){
            heap.push(value);
            let i=heap.length-1;
            while(i>0){
                const parent = Math.floor((i-1)/2);
                if(heap[parent]>=heap[i]) break;
                [heap[i],heap[parent]]=[heap[parent],heap[i]]
                i=parent
            }
        }

        function Pop(){
            if(heap.length===1) return heap.pop();
            const max=heap[0];
            heap[0]=heap.pop();
            let i=0;
            while(true){
                let largest=i
                const left=2*i+1;
                const right=2*i+2;
                if(left<heap.length &&heap[left]>heap[largest]) largest=left;

                if(right<heap.length && heap[right]>heap[largest]) largest=right;
                if(largest===i) break;
                [heap[largest],heap[i]]=[heap[i],heap[largest]]
                i=largest;
            }
            return max;
        }
        for(const stone of stones){
            Push(stone);
        }
        while(heap.length>1){
            const first=Pop();
            const second=Pop();

            if(first!==second){
                Push(first-second);
            }

        }
        return heap.length ? heap[0] :0;
    }
}
