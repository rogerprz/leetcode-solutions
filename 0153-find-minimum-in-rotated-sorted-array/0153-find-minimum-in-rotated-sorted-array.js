/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1

    while (l < r) {
        let m = Math.floor((l+r)/2)
        const low = nums[l]
        const mid = nums[m]
        const high = nums[r]
        if (mid < high) {
            r = m
        } else {
            l = m +1
        }
    }

    return nums[l]
};