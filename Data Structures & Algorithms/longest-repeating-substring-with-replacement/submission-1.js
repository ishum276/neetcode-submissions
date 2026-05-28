class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let left=0;
        let maxFreq=0;
        let count = {};
        for(let right=0;right<s.length;right++){
            count[s[right]]= (count[s[right]]||0)+1;
            maxFreq= Math.max(maxFreq,count[s[right]]);
            let windowLength = right -left +1;

            while(windowLength-maxFreq>k){
                count[s[left]]--;
                left++;
                windowLength = right -left+1;

            }
            maxLength= Math.max(windowLength,maxLength)

        }
        return maxLength;
    }
}
