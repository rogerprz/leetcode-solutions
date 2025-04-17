/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a,b) => a[0] - b[0])
    const res = []
    let prev = intervals[0]
    res.push(prev)

    for (let i = 0; i < intervals.length;i++) {
        const interval = intervals[i];
        const [start, end] = interval;
        // [[1, 3],[2,6],[8, 10],[15,18]]
        //                pS pE  
        if (start <= prev[1]) {
            prev[1] = Math.max(end, prev[1])
        } else {
            res.push(interval)
            prev = interval
        }
    }
    return res
};