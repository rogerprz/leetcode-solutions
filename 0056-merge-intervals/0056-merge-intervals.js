/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let prev = intervals[0];
    const res = [prev]
    // [[1, 3],[2,6],[8,10],[15,18]]
    //   pS pE   s e

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const [start, end] = interval;
        if (start <= prev[1]) {
            prev[1] = Math.max(end, prev[1])
        } else {
            res.push(interval)
            prev = interval
        }
    }
    return res; 
};