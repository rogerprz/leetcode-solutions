/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) { // 0
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const m = Math.floor((l+r)/ 2)
        const low = nums[l]
        const mid = nums[m]
        const high = nums[r]
    //  0,1,2,3,4,5,6
    // [4,5,6,7,0,1,2]
    //  l     m     r
    //     
        if (mid === target) return m
        
        if (low <= mid) {
            if (low <= target && target <= mid) {
                r = m - 1
            } else {
                l = m + 1
            }
        } else {
            if (mid <= target && target <= high) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
};