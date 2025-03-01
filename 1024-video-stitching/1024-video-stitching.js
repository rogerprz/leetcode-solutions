/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    clips.sort((a,b) => {
        return a[0] - b[0];
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