/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        const left = nums[i]
        let m = i + 1
        const mid = nums[m]
        if (left === nums[i - 1]) continue
        for (let r = m + 1; r < nums.length;r++) {
            const right = nums[r]

            const sum = left + right
            if (sum === mid/2) count++
        }
    }
    return count;
};