/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, index = 0) {
    let memo = []
    const dp = (i) => {
        if (i >=nums.length) {
            return 0
        }
        if (memo[i] != null) {
            return memo[i]
        }

        memo[i] = Math.max(dp(i+2) + nums[i], dp(i+1))

        return memo[i]
    }
    return dp(0)
};