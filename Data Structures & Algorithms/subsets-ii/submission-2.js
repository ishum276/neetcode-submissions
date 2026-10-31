class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b)=>a-b)
        const result=[]
        const temp=[]
        function backtrack(i){
            
                result.push([...temp])
           
            for(let j=i;j<nums.length;j++){
                if(j>i && nums[j]===nums[j-1]) continue
                temp.push(nums[j])
                backtrack(j+1)
                temp.pop()
            }
        }
        backtrack(0)
        return result
    }
}
