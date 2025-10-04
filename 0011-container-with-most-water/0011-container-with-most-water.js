/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1; 
    let max = 0;

    while (l < r) {
        const lHeight = height[l]
        const rHeight = height[r];

        const width = r - l;
        const minHeight = Math.min(lHeight, rHeight)
        max = Math.max(max, width * minHeight)

        if (lHeight > rHeight) {
            r--
        } else {
            l++
        }
    }
    return max
};