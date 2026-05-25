class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const has = new Set();
       for(const num of nums){
        if(has.has(num)){
            return true;
            
        }has.add(num);
       }
        return false;
    }
}
