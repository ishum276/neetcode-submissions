class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest=0;
        const set= new Set(nums);
        for(const num of set){
            if(!set.has(num-1)){
                let current = num;
                let length =1;

                while(set.has(current+1)){
                    current++;
                    length++;
                }

                longest = Math.max(length,longest);
            }
        }
        return longest;
    }
}
