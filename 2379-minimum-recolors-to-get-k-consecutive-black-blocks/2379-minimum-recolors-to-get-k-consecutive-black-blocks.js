/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let black = 0;
    let size = blocks.length
    // WBBWWBBWBW"
    // 0123456789
    for (let i = 0; i < blocks.length; i++) {
        // we dont hit this condition until we've reached k len 
        // when we do then we check that the first char is B so remove it from 
        // the blacks estimates
        const startChar = blocks[i - k]
        const isValidLen = i - k >= 0
        if (isValidLen && startChar === 'B') {
            black--
        }
        if (blocks[i] === "B") black++
        const minWhites = k - black
        size = Math.min(size, minWhites)
    }
    return size
};