class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result= [];
        const temp=[]
        let sum=0;
        candidates.sort((a, b) => a - b);
        function backtrack(i){
            if(sum===target){
                result.push([...temp]);
                return;
            }
            if(sum>target || i>=candidates.length){
                return;
            }
            for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) {
                continue;
            }
            temp.push(candidates[j])
            sum+=candidates[j]
            backtrack(j+1);
            temp.pop()
            sum-=candidates[j]
            }
        }
        backtrack(0)
        return result
    }
}
