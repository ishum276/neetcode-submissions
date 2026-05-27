class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater =0;
        let left =0;
        let right = heights.length-1;
        while(left<right){
            const width = right-left;
            const h = Math.min(heights[left],heights[right]);
            const area = width* h;
            maxWater= Math.max(maxWater,area);

            if(heights[left]<heights[right]){
                left++;
            }
            else right--;

        }
        return maxWater;
    }
}
