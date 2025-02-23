/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    const sorted = clips.sort((a,b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]; // Sort by the first element
        } else {
            return a[1] - b[1];
        }
    })
    if (clips[0][0] !== 0) {
        return -1
    }

    let currEnd = 0, taken = 0, nextEnd = 0

    let i = 0; 
    while (i < clips.length && clips[i][0] <= currEnd) {
        while (i < clips.length && clips[i][0] <= currEnd) {
            nextEnd = Math.max(nextEnd, clips[i][1]);
            i++;
        }
        taken++;
        currEnd = nextEnd;
        if (currEnd >= time) {
            return taken;
        }
    }
    return -1;
};