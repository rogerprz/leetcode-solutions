/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=> a[0] - b[0])
    let prev = intervals[0]
    const arr = [prev];
    console.log("I:", intervals)
    //  [3,8]
    //  [[1,2]]       
    // [[1,2],[3,5],[4,8][6,7],[8,10],[12,16]]
    //         i 
    for (let i = 1;i < intervals.length;i++) {
        const interval = intervals[i]
        const [start, end] = interval

        if (start <= prev[1]) {
            prev[1] = Math.max(end, prev[1])
        } else {
            arr.push(interval)
            prev = interval
        }
    }

    return arr
};