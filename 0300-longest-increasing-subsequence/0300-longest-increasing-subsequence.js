/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const stack = []

    for (const currNum of nums) {
        let left = 0             // 0  0
        let right = stack.length // 0  0 0
        while (left < right) {
            const mid = Math.floor((left + right)/ 2)
            const midStack = stack[mid]

            if (currNum > midStack) {
                left  = mid + 1
            } else {
                right = mid
            }
        }
        if (left === stack.length) {
            stack.push(currNum)
        } else {
            stack[right] = currNum
        }
    }
    return stack.length
};

/*
var lengthOfLIS = function(nums) {

    const dp = new Array(nums.length).fill(1)

    for (let i = 1; i<nums.length;i++) {
        const currNum = nums[i]
        for (let j = 0; j < i; j++) {
            if (nums[j]< currNum) {
                dp[i] = Math.max(dp[j]+1, dp[i])
            }
        }
    }

    return Math.max(...dp)
};
 */