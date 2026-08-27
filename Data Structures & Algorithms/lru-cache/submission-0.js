class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.size=capacity;
        this.timeStamp=0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if(!this.map.has(key))
        return -1;

        this.timeStamp++;
        const [value]= this.map.get(key)
        this.map.set(key,[value,this.timeStamp])

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.timeStamp++;
        this.map.set(key,[value,this.timeStamp])
        if(this.map.size>this.size){
            let leastUsedKey=null;
            let smallestTimeStamp=Infinity;
            for(const [key,[value,timeStamp]] of this.map){
                if(timeStamp< smallestTimeStamp){
                    smallestTimeStamp = timeStamp;
                    leastUsedKey=key;
                }

            }
            this.map.delete(leastUsedKey);
        }
    }
}
