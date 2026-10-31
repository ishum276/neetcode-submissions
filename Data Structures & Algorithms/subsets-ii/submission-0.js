class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const temp=[]
        const result=[]
        const map=new Map()
        function backtrack(i){
            if(i>=nums.length){
                const key= [...temp].sort((a,b)=>a-b).toString()
                if(map.has(key)) return;
                result.push([...temp])
                map.set(key,true)
                return
            }
            temp.push(nums[i])
            backtrack(i+1)
            temp.pop()
            backtrack(i+1)
        }
        backtrack(0)
        return result;
    }
}
