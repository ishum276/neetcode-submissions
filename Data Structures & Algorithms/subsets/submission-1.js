class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result=[];
        const temp=[];
        function backtrack(i){
            if(nums.length===i){
                result.push([...temp]);
                return;
            }
            temp.push(nums[i])
            backtrack(i+1)
            temp.pop();
            backtrack(i+1)
        };
        backtrack(0);
        return result;
    }
}
