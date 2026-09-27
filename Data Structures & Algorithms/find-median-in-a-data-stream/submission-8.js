class MedianFinder {
    constructor() {
        this.arr=[]
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
           let i = this.arr.length - 1;

    while (i >= 0 && this.arr[i] > num) {
        this.arr[i + 1] = this.arr[i];
        i--;
    }

    this.arr[i + 1] = num;
    }

    /**
     * @return {number}
     */
    findMedian() {
        
        const mid= Math.floor(this.arr.length/2)
        if(this.arr.length%2===1){
            return this.arr[mid]
        }
        return (this.arr[mid]+this.arr[mid-1])/2


    }
}
