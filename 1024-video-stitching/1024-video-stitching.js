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
                    // start:  0 1 1 4
    let maxReachable = 0;   // 0 2 2 9
    let currMax = 0;        // 2 5 9 
    let numClips = 0;       // 0 0 1 2
                    //  end :  2 5 9 6

    for (let [start, end] of clips) {
        if (start > maxReachable) {
            maxReachable = currMax;
            numClips++;
            // if we reach this condition we've checked too many
            // and we haven't found our clips
            if (start > maxReachable) return -1;
        }

        currMax = Math.max(currMax, end)
        // once we've found our currMax to be >= time we found a match
        // we return numClips + 1 for final loop
        if (currMax >= time) {
            return numClips + 1;
        }
    }

    return -1;
};