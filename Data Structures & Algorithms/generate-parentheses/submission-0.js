class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const temp=[]
        const result=[]
        function backtrack(open,close){
            if(temp.length===2*n){
                const temp2= temp.join("")
            result.push(temp2)
            return 
            }
            if(open<n){
                temp.push("(")
                backtrack(open+1,close)
                temp.pop()
            }
            if(close<open){
                temp.push(")")
                backtrack(open,close+1)
                temp.pop()
            }
        }
        backtrack(0,0) 
        return result
    }
}
