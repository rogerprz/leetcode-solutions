/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Input: [[1,3],[2,6],[8,10],[15,18]]
    // Output: [[1,6],[8,10],[15,18]]
    intervals.sort((a,b) => a[0] - b[0])
    let prev = intervals[0] // [1,3]
    let res = [prev]

    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i]
        const [start, end] = curr
        
        if (prev[1] >= start) {
            prev[1] = Math.max(prev[1], end)
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
};