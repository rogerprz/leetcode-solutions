/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length < 3) return 0;
    nums.sort((a,b) => a-b)
    const negMax = nums[0] * nums[1] * nums[nums.length -1]
    const end = nums[nums.length - 1] * nums[nums.length -2] * nums[nums.length -3]
    return Math.max(negMax, end)
};