/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let ans = [];
    let index = 0;
    while (index < intervals.length && intervals[index][0] < newInterval[0]) {
        index++;
    }
    intervals.splice(index, 0, newInterval);
    let prev = intervals[0]
    const arr = [prev];

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