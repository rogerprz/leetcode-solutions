/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if (nums.length === 1) return true

    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i-1] % 2
        const curr = nums[i] % 2
        if (prev === curr) {
            return false
        }
    }
    return true
};