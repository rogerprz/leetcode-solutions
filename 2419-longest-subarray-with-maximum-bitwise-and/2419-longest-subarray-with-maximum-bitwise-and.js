/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = Math.max(...nums);
    let maxLen = 0;
    let streak = 0;
    // [1,2,3,3,2,2]
    for (let num of nums) {
        if (num === max) {
            streak++;
            maxLen = Math.max(maxLen, streak);
        } else {
            streak = 0;
        }
    }

    
    return maxLen;

};