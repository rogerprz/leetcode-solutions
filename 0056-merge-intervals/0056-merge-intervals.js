/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals

    intervals.sort((a,b) => a[0] - b[0])
    let prev = intervals[0]
    let arr = [prev]
    //          p 
    // [[1,6], [8,10], ]
    // [[1,3],[2,6],[8,10],[15,18]]
    //               i
    for (let i = 1; i < intervals.length;i++) {
        const [start, end] = intervals[i]

        if (start <= prev[1]) {
            prev[1] = Math.max(prev[1], end)
        } else {
            arr.push(intervals[i])
            prev = intervals[i]
        }
    }
    return arr
};