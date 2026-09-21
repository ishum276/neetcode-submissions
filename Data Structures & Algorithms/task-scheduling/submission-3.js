class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
       this.heap.push(value)
       let i=this.heap.length-1
       while(i>0){
        const parent=Math.floor((i-1)/2)
        if(this.heap[i][0]<=this.heap[parent][0]) break;
        [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]]
        i=parent;
       }
    }

   pop() {
    const max = this.heap[0];

    const last = this.heap.pop();

    if (this.heap.length > 0) {
        this.heap[0] = last;

        let i = 0;

        while (true) {
            let largest = i;

            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (
                left < this.heap.length &&
                this.heap[left][0] > this.heap[largest][0]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][0] > this.heap[largest][0]
            ) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }
    }

    return max;
}

    size() {
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
    const freq = new Map();

    for (const task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1);
    }

    const heap = new MaxHeap();

    for (const [task, count] of freq) {
        heap.push([count, task]);
    }

    // [availableTime, count, task]
    const cooldown = [];

    let time = 0;
    let cooldownIndex = 0;

    while (heap.size() > 0 || cooldownIndex < cooldown.length) {

        // Put cooled-down tasks back into heap
        while (
            cooldownIndex < cooldown.length &&
            cooldown[cooldownIndex][0] <= time
        ) {
            const [, count, task] = cooldown[cooldownIndex];

            heap.push([count, task]);
            cooldownIndex++;
        }

        // Nothing available
        if (heap.size() === 0) {
            time = cooldown[cooldownIndex][0];
            continue;
        }

        // Pick most frequent task
        const [count, task] = heap.pop();

        // Execute it
        time++;

        // Still needs execution
        if (count > 1) {
            cooldown.push([
                time + n,
                count - 1,
                task
            ]);
        }
    }

    return time;
}
}
