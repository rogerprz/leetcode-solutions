/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    
    // blocks = "WBBWWBBWBW", 
    // k = 7
    let black = 0; 
    let size = Infinity;
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]

        const startElem = blocks[i - k]
        if (i - k >= 0 && startElem === "B") {
            black--
        }
        if (block === "B") black++
        const minNeeded = k - black 
        size = Math.min(size, minNeeded)
    }
    return size;
};