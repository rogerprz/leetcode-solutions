/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const n = nums.length;
    let badPairs = 0;
    // Bad: j - i != nums[j] - nums[i] 
    // Good: nums[i] - i != nums[j] - j
    const map = new Map()
    for (let i = 0; i < n; i++) {
        const diff = i - nums[i]

        const goodPairCount = map.get(diff) || 0;
        badPairs += i - goodPairCount
        map.set(diff, goodPairCount + 1)
    }
    return badPairs
};
/**
const hash = {}
    let badPairs = 0
    for (let i = 0; i < nums.length; i++) {
        const diff = i - nums[i]
        
        const goodPairsCount = hash[diff] || 0

        badPairs += i - goodPairsCount

        hash[diff] = goodPairsCount + 1
    }
    
    return badPairs

    const n = nums.length;
    const map = new Map();
    // n = 4, 4 * (4 - 1) / 2 = 6
    let totalPairs = (n * (n - 1)) / 2;
    let goodPairs = 0;

    for (let i = 0; i < n; i++) {
        const diff = nums[i] - i;

        goodPairs += map.get(diff) || 0
        map.set(diff, (map.get(diff) || 0) + 1)
    }

    return totalPairs - goodPairs;
     */