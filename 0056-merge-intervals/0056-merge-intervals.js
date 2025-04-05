/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let prev = intervals[0]
    const res = [prev]
    // [[1,3],[2,6],[8,10],[15,18]]
    //   ps      pe  s e  
    // prev = [8,10]
    // res = [[1,6], [8, 10]]
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]

        if (start <= prev[1]) {
            prev[1] = Math.max(end, prev[1])
        } else {
            res.push(intervals[i])
            prev = intervals[i]
        }
    }
    return res
};