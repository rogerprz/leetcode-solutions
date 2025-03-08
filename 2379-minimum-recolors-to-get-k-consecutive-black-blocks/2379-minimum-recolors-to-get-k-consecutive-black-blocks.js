/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let black = 0;
    let size = blocks.length

    for (let i = 0; i < blocks.length; i++) {
        if (i - k >= 0 && blocks[i - k] === 'B') {
            black--
        }
        if (blocks[i] === "B") black++
        size = Math.min(size, k - black)
    }
    return size
};