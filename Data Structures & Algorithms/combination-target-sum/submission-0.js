class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result=[];
        const temp=[];
        let sum=0;
        function backtrack(i){
            if(sum===target){
                result.push([...temp]);
                return;
            }
            
            else if(sum>target || i>=nums.length ){
                return;
            }
            temp.push(nums[i])
            sum+=nums[i]
            backtrack(i)
            sum-=nums[i]
            temp.pop()
            backtrack(i+1)
        }
        backtrack(0);
        return result;
    }
}
