/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = new Array(nums.length)
    // [1,2,3,1]
    //  0,1,2,3,
    // [4,3,,]
    const dp = (index) => {
        if (index >= nums.length) {
            return 0
        }
        if (index in memo) {
            return memo[index]
        }
        const curr = nums[index]
        memo[index] = Math.max(curr +  dp(index + 2), dp(index + 1))

        return memo[index]
    }

    return dp(0)
};