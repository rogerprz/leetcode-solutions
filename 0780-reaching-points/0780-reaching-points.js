/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var reachingPoints = function(x1, y1, x2, y2) {
    // x1 = 1, y1 = 1, 
    // x2 = 3, y2 = 5
    // (x, x + y) or (x + y, y)

    while (x2 >= x1 && y2 >=y1) {
        if (x2 === y2) break;
        if (x2 > y2) {
            if (y2 > y1) {
                x2 %= y2
            } else return (x2 - x1) % y2 === 0
        } else {
            if (x2 > x1) y2 %= x2;
            else return (y2 - y1) % x2 === 0
        }
    }

    return x2 === x1 && y1 === y2
};