class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left= 0;
        let right = nums.length-1;
        while(left<=right){
            const mid=left+ Math.floor((right-left)/2);
            if(target===nums[mid]){
            return mid;}
            else if(target<nums[mid]){
                right=mid-1;
            }
            else if(target>nums[mid]){
                left= mid+1;
            }
            
        }
      return -1;
    }
}
