/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const sTimes = intervals.sort((a,b) => a[0]- b[0]).map((val) => val[0])
    const eTimes = intervals.sort((a,b) => a[1]- b[1]).map((val) => val[1]) 
    console.log("S", sTimes)
    console.log("E", eTimes)
    let count = 0;
    let start = 0;
    let end = 0;

    while (start < intervals.length) {
        if (sTimes[start] < eTimes[end]) {
            count++
        } else {
            end++
        }
        start++
    }
    return count
};
