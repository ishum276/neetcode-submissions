class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
const stack =[];
const map = {
    ")":"(",
    "}":"{",
    "]":"["
}

    for(const ch of s){
        if(ch==='{'||ch==='('||ch==='[')
        stack.push(ch);

        else{
            if(stack.length===0)
            return false;

            if(stack[stack.length-1]!== map[ch])
            return false;
            stack.pop();
        }

        
    }
    return stack.length===0;
    }
}
