/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    clips.sort((a,b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    })
    if (clips[0][0] !== 0) return -1
    // [[0,2],[1,5],[1,9],[4,6],[5,9],[8,10]]
    let maxReachable = 0;
    let currMax = 0;
    let numClips = 0;

    for (let [start, end] of clips) {
        console.log('S', start, end)
        if (start > maxReachable) {
            maxReachable = currMax;
            if (start > maxReachable) {
                return -1;
            }
            numClips++;
        } 
        currMax = Math.max(currMax, end)
        if (currMax >= time) {
            return numClips + 1;
        }
    }

    return -1;
};