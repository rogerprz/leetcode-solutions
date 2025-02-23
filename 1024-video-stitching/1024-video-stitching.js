/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    const sorted = clips.sort((a,b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    })
    if (clips[0][0] !== 0) return -1

    let maxReachable = 0;
    let currMax = 0;
    let numClips = 0;
    
    for (let clip of clips) {
        const [start, end] = clip
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