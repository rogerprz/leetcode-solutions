/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const last = {}
    const close = new Array(nums.length * 2).fill(nums.length)
    for (let i = 0; i < 2 * nums.length; ++i) {
        const pos = i % nums.length
        const n = nums[pos]
        if (last[n] !== undefined) {
            close[i] = i - last[n]
            if (close[last[n]] > close[i]) {
                close[last[n]] = close[i]
            }
        }
        last[n] = i
    }
    return queries.map(q => {
        const d = Math.min(close[q], close[q + nums.length])
        return d === nums.length ? -1 : d
    })
};