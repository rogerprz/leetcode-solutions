/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    const findPeak = (nums, l, r) =>{
        if (l === r) {
            return l
        }
        const mid = Math.floor((l+r)/2)

        if (nums[mid] > nums[mid+1]) {
            return findPeak(nums, l, mid)
        }
        return findPeak(nums,mid+1, r)
    }

    return findPeak(nums, 0, nums.length-1)
};