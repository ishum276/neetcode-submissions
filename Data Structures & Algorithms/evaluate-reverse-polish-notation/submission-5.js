class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack=[]
        for(const token of tokens){
            if(token ==='+'||token ==='-'||token ==='*'||token ==='/'){
                const b= stack.pop();
                const a = stack.pop();
                let result;
                if(token === '+'){
                    result = Number(a+b)
                }
                 if(token === '-'){
                    result = Number(a-b)
                }
                 if(token === '*'){
                    result = Number(a*b)
                }
                 if(token === '/'){
                    result = Math.trunc(a/b)
                }
                stack.push(result)
            }
            else{
                stack.push(Number(token))
            }
        }
        return stack.pop()
       
    }
}
