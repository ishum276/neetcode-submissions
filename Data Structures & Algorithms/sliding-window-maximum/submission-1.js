class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result =[];
        for(let left =0 ; left<nums.length-k+1;left++){
            let max=nums[left];

            for(let right= left; right<left+k;right++){
                max=Math.max(max,nums[right]);
            }
            result.push(max);
        }
        return result;
    }
}
