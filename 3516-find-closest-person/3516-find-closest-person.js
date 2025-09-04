/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const first = Math.abs(z - x)
    const second = Math.abs(z - y)
    if (first === second) return 0;
    return first > second ? 2 : 1
};