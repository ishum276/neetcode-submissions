class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ="";
        for (const str of strs){
            result += str.length +'#'+ str;

        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]} 5#hello
     */
    decode(str) {
        const result=[];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=='#'){
                j++;
            }
            const length = Number(str.slice(i,j));
            const word = str.slice(j+1, j+length+1)

            result.push(word)
            i=j+1+length;
        }
        return result;
    }
}
