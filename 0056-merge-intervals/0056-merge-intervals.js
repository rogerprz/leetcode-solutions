/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   // 
   intervals.sort((a,b) => a[0] - b[0]) 
   let prev = intervals[0]
   let res = [prev]
   // res = [[1,3],[8,10]]
   // [[1,3],[2,6],[8,10],[15,18]]
    // pre = [1,6]
    // int = [2,6],[8,10]
   for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        // 8 < 6
        if (start <= prev[1]) {
            prev[1] = Math.max(prev[1], end)
        } else {
            res.push(intervals[i])
            prev = intervals[i]
        }
   }
   return res
};