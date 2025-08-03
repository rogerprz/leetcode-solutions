/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b)
    const len = nums.length -1
    const min = nums[0] * nums[1] * nums[len]
    const max = nums[len] * nums[len-1] * nums[len-2]

    return Math.max(min, max)
};