/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let black = 0
    let size = Infinity

    for (let i = 0; i < blocks.length; i++) {
        
        const startOfWin = blocks[i - k];

        const isValidWin = i - k >= 0;
        if (isValidWin && startOfWin === "B") {
            black--
        }
        if (blocks[i] === "B") black++
        const minNeeded = k - black 
        size = Math.min(size, minNeeded)
    }
    return size
};