class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length==0)
        return;
        let prev ="";
        while(prev !== s){
            prev=s;
            s=s.replace("()","");
            s=s.replace("{}","");
            s=s.replace("[]","");
        }
        if(s.length==0)
        return true;
        

        return false;
    }
}
