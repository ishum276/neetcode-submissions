class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if(stones.length===0) return 0;
        if(stones.length===1) return stones[0];
        let i=stones.length-1;
        stones.sort((a, b) => a - b);
        while(i>0){
            const last=stones[i];
            const lastSecond= stones[i-1];
            stones.pop();
            stones.pop()
            if(last===lastSecond) {
                i = stones.length - 1;
                continue;}
            let toPush;
            if(last>lastSecond){
                toPush= last-lastSecond;
                stones.push(toPush)
            }
            if(lastSecond>last){
                toPush=lastSecond-last;
                stones.push(toPush)
            }
              stones.sort((a, b) => a - b);
           i=stones.length-1;
        }
        if(stones.length===0) return 0;
        return stones[0]
    }
}
