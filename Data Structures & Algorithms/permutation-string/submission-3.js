class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false;
        let left=0;
        let freq=0;
        const obj1={};
        const obj2={};
        for(const str of s1){
            obj1[str] = (obj1[str]||0)+1;

        }


      for(let right =0;right<s2.length;right++){
        obj2[s2[right]]= (obj2[s2[right]]||0)+1;

        if(right-left+1>s1.length){
            obj2[s2[left]]--;
            
            if(obj2[s2[left]]===0)
            delete obj2[s2[left]];

            left++;
        }

        if(this.isEqual(obj1,obj2)){
            return true;
        }


      }
      return false;
    }

     isEqual(obj1,obj2){
        const key1= Object.keys(obj1);
        const key2 = Object.keys(obj2);
        if(key1.length!==key2.length) return false;

        for(const key of key1){
            if(obj1[key]!==obj2[key])
            return false;
        }

        return true;
    }
}
