/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return intervals;

    const res = []
    intervals.sort((a,b) => a[0]-b[0])
    res.push(intervals[0])
    // [[1,4],[4,5]]
    // res = [[1,4]]
    for (let i = 1; i < intervals.length; i++) {
        // [4,5]
        const [start, end] = intervals[i]
        const prevEnd = res[res.length - 1][1]
        if (start <= prevEnd) {
            res[res.length - 1][1] = Math.max(end, prevEnd)
        } else {
            res.push(intervals[i])
        }
    }
    return res
};