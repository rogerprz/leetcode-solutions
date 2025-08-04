/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const last = {}
    const close = new Array(nums.length * 2).fill(nums.length)
    
    for (let i = 0; i < close.length; ++i) {
        const pos = i % nums.length
        const num = nums[pos]
        if (num in last) {
            close[i] = i - last[num]
            if (close[last[num]] > close[i]) {
                close[last[num]] = close[i]
            }
        }
        last[num] = i
    }
    return queries.map(q => {
        const d = Math.min(close[q], close[q + nums.length])
        return d === nums.length ? -1 : d
    })
};