/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const set = new Set()
    let index = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i]
        if (set.has(num)) {
            return Math.ceil((i+ 1)/3)
        }
        set.add(num)
    }

    if (index === 0) {
        return index
    }
    return Math.ceil(index/3)
};