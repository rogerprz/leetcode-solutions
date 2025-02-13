/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const hash = {}
    let badPairs = 0
    for (let i = 0; i < nums.length; i++) {
        const diff = i - nums[i]
        
        const goodPairsCount = hash[diff] || 0

        badPairs += i - goodPairsCount

        hash[diff] = goodPairsCount + 1
    }
    
    return badPairs
};