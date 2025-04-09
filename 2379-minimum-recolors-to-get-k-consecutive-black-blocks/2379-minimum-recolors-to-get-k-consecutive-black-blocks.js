/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let black = 0; 
    let size = Infinity;
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]


        if (i - k >= 0 && blocks[i-k] === "B") {
            black--
        }
        if (block === "B") black++

        const minNeeded = k - black 
        size = Math.min(size, minNeeded)
    }
    return size
};