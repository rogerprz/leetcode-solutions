/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0
    let r = nums.length - 1;

    while (l < r) {
        const m = Math.floor((l+r) / 2)
        const num = nums[m];

        if (num < nums[m + 1]) {
            l = m + 1
        } else {
            r = m
        }
    }
    return l
};