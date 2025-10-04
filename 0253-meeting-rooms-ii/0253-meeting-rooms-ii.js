/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const startTimes = intervals.sort((a,b)=> a[0] - b[0]).map((val) => val[0])
    const endTimes = intervals.sort((a,b)=> a[1] - b[1]).map((val) => val[1])
    console.log("S:", startTimes)
    console.log("E:",endTimes)

    let start = 0;
    let end = 0;
    let count = 0;

    while (start < intervals.length) {
        if (startTimes[start] < endTimes[end]) {
            count++ 
        } else {
            end++
        }
        start++
    }

    return count;
};