/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length < 3) return 0;

    nums.sort((a,b) => a-b)
    const len = nums.length - 1
    const posProd = nums[len] * nums[len -1] * nums[len -2]
    const negProd = nums[0] * nums[1] * nums[len]

    return Math.max(posProd, negProd)
};