class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length>nums2.length){
            [nums1,nums2]=[nums2,nums1];
        }
        let left =0;
        let m= nums1.length;
        let n = nums2.length;
        let right = m;
        let leftSize= Math.floor((m+n+1)/2);
        while(left<=right){
            const partition1= left + Math.floor((right-left)/2);
            const partition2= leftSize- partition1;

            const left1= partition1>0 ? nums1[partition1-1]: -Infinity;
            const right1=partition1<m ? nums1[partition1]: Infinity;
            const left2 = partition2 >0 ? nums2[partition2 -1]: -Infinity;
            const right2 = partition2<n ? nums2[partition2]: Infinity;

            if(left1<=right2 && left2<=right1){
                if((m+n)%2==1){
                    return Math.max(left1,left2);
                }
                return (Math.max(left1,left2)+Math.min(right1,right2))/2;
            }
            else if (left1>right2){
                right=partition1-1;
            }
            else left=partition1+1;

        }
    }
}
