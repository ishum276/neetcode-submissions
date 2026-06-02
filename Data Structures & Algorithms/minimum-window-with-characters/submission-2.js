class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        let left =0;
        const count ={};
        const window ={};
        for(let i =0;i<t.length;i++){
            count[t[i]]=  (count[t[i]]||0)+1;
        }

        let have=0;
        let minLength =Infinity;
        let result =[-1,-1];
        let need= Object.keys(count).length;
        for(let right=0; right<s.length;right++){
            const char= s[right];

            window[char]= (window[char]||0)+1;

            if(count[char]&& window[char]===count[char]){
                have++;
            }

            while(need===have){

                if(right-left+1<minLength){
                    minLength= right-left+1;
                    result=[left,right];
                }
                window[s[left]]--;


                if(count[s[left]] && window[s[left]]< count[s[left]]){
                    have--;
                }
                left++;


            }
        }

        const [start,end] = result;
        return minLength===Infinity?"":s.slice(start,end+1);

    }
}
