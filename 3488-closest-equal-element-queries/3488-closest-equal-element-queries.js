/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const last = {}
    const n = nums.length;
    let close = new Array(n * 2).fill(n);

    for (let i = 0; i < close.length;i++) {
        const pos = i % n;
        const num = nums[pos];

        if (num in last) {
            close[i] = i - last[num]; // currPos
            const prevPos = close[last[num]]

            if (prevPos > close[i]) {
                close[last[num]] = close[i];
            }
        }
        last[num] = i;
    }

    return queries.map((q) => {
        const d = Math.min(close[q], close[q + n]);
        return d === n ? -1 : d;
    })
};