class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap=[];
        function Pop(){
            heap[0]=heap.pop();
            let i=0;
            while(true){
                const left=2*i+1;
                const right=2*i+2;
                let smallest=i;
                if(left<heap.length && heap[left]< heap[smallest]) smallest=left;
                if(right<heap.length && heap[right]< heap[smallest]) smallest=right;
                if(i===smallest) break;
                [heap[smallest],heap[i]]=[heap[i],heap[smallest]]
                i=smallest;
            }
        }
        function Push(num){
            heap.push(num);
            let i=heap.length-1;
            while(i>0){
                const parent= Math.floor((i-1)/2)
                if(heap[parent]<heap[i]) break;
                [heap[parent],heap[i]]=[heap[i],heap[parent]]
                i=parent;
            }
            if(heap.length>k) Pop();
        }
        for(const num of nums){
            Push(num);
        }
        return heap[0];

    }
}
