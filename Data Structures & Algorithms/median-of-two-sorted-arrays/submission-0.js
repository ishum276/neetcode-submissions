class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       
       let i=0;
       let j=0;
       const merged=[];
       while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
        merged.push(nums1[i])
        i++;}
        else {merged.push(nums2[j])
        j++;}
       }
       while(i<nums1.length){
        merged.push(nums1[i])
        i++;
       }
       while(j<nums2.length){
        merged.push(nums2[j])
        j++;
       }
       const n = merged.length;
       if(n%2!==0){
        return merged[Math.floor(n/2)]
       }

       return (merged[n/2-1]+merged[n/2])/2;

    }
}
