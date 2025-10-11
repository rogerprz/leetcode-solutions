/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let startTimes = intervals.map((([start,_end]) => start)).sort((a,b) => a - b)
    let endTimes = intervals.map((([_start,end]) => end)).sort((a,b) => a - b)

    let count = 0; // 2
    let start = 0;
    let end = 0;
    while (start < startTimes.length) {
        if (startTimes[start] < endTimes[end]) {
            count++
        } else {
            end++
        }
        start++
    }
    return count;
};
