/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   if (!intervals.length) return intervals
   
   intervals.sort((a,b) => a[0] - b[0]);

    let prev = intervals[0]
    let res = [prev]

    // [[1,3],[2,6],
    for (let i = 1; i<intervals.length;i++) {
        const curr = intervals[i]
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
};