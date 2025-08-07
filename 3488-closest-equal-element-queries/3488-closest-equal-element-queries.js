/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const last = {}

    const close = new Array(nums.length * 2).fill(nums.length)

    for (let i = 0; i < close.length; ++i) {
        // i = 4
        const pos = i % nums.length // 0
        const num = nums[pos] // 1
        // last[num] = 3
        if (num in last) {
            // curr distance
            close[i] = i - last[num]  // 3 - 0 = 0
            const prevDist = close[last[num]]
            if (prevDist > close[i]) {
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