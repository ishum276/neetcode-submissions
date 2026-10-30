class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const temp=[]
        const result=[]
        const used= new Array(nums.length).fill(false)
        function backtrack(){
            if(temp.length===nums.length){
                result.push([...temp])
                return
            }
            for(let i=0;i<nums.length;i++){
                if(used[i]) continue;
                temp.push(nums[i])
                used[i]=true
                backtrack()
                temp.pop()
                used[i]=false
            }
            
        }
        backtrack()
        return result
    }
}
