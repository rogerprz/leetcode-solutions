/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let max = 0;
    let memo = []
    // [1,2,3,1]
    //  0,1,2,3,
    // [4,3,,]
    const dp = (index) => {
        if (index >= nums.length) {
            return 0
        }
        if (memo[index] != null) {
            return memo[index]
        }
        const curr = nums[index]
        memo[index] = Math.max(curr +  dp(index + 2), dp(index + 1))

        return memo[index]
    }

    return dp(0)
};