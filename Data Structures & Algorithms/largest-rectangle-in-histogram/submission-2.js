class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack=[];
        let maxArea=0;
        const n= heights.length
        const left= new Array(n)
        const right =new Array(n)
        //left
        for(let i=0;i<n;i++){
            while(stack.length>=0 && heights[i]<=heights[stack[stack.length-1]]){
                stack.pop();
            }
            left[i]= stack.length ===0?-1: stack[stack.length-1]
            stack.push(i);
        }
        stack.length=0;

        //right
        for(let i=n-1;i>=0;i--){
            while(stack.length>=0 && heights[i]<=heights[stack[stack.length-1]]){
                stack.pop();
            }
            right[i]= stack.length ===0?n: stack[stack.length-1]
            stack.push(i);
        }

        for(let i=0;i<n;i++){
           const height=heights[i];
            const width = right[i]-left[i]-1;
            const area = height*width;
            maxArea=Math.max(area,maxArea)
        }
        return maxArea;

    }
}
