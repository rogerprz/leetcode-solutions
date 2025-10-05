/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return intervals;

    intervals.sort((a,b) => a[0]-b[0])

    const res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
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