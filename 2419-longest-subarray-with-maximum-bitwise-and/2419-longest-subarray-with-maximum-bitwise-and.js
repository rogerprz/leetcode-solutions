/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const maxNum = Math.max(...nums);

    let count = 0;
    let ans = 0
    for (const num of nums) {
        if (num === maxNum) count++
        if (num < maxNum) {
            ans = Math.max(count,ans)
            count = 0;
            continue
        }
        
    }

    return Math.max(count, ans);
};