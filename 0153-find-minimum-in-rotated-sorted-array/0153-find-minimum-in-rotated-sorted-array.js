/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1
    //. 0,1,2,3,4
    // [3,4,5,1,2]
    //        lm r
    while (l < r) {
        let m = Math.floor((l+r)/2)
        const low = nums[l]
        const mid = nums[m]
        const high = nums[r]
        if (mid > high) {
            l = m +1
        } else {
            r = m
        }
    }

    return nums[l]
};