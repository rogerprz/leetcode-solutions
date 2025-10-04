/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    // (x, x + y)
    // (x + y, y)
    // sx = 1, sy = 1
    // tx = 2, ty = 2
    // (1, 1) → (2, 1) → (2, 3) → (5, 3) etc.
    while (tx >= sx && ty >= sy) {
        if (tx === ty) break;
        // sx = 1, sy = 1
        // tx = 2, ty = 0
        if (tx > ty) {
            if (ty > sy) tx = tx % ty;
            else return (tx - sx) % ty === 0;
        } else {
            if (tx > sx) ty = ty % tx;
            else return (ty - sy) % tx === 0;
        }
    }
    return (tx === sx && ty === sy);
};
