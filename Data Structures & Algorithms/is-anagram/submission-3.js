class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen1 = new Map();
        const seen2 = new Map();
        if(s.length !== t.length) return false;
        for (const char of s ){

           seen1.set(char, (seen1.get(char) || 0) + 1)
        
        }
        for (const char of t ){
  
        seen2.set(char, (seen2.get(char) || 0) + 1)
        }

        for(const[key,val] of seen1){
            if(seen2.get(key) !== val) return false;
           
        }
        return true;
    }
}
