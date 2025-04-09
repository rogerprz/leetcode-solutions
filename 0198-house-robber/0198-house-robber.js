/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const memo = [];

  const dp = (i) => {
    if (i >= nums.length) {
        return 0
    }
    if (memo[i] != null) {
        return memo[i]
    }
    const next = dp(i + 1)
    const oneAfter = dp (i + 2)
    memo[i] = Math.max(nums[i] + oneAfter, next)

    return memo[i]
  } 

  return dp(0) 
};


/**
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
     */