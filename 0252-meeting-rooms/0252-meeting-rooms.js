/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    
    for (let i = 1; i < intervals.length;i++) {
        const [sPre, ePre] = intervals[i-1]
        const [sCurr, eCurr] = intervals[i]

        if (ePre > sCurr) return false
    }
    return true
};