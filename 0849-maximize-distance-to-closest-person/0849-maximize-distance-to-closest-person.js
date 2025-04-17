/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const zeros = seats.join('').split('1');
    const firstSec= zeros.shift().length;
    const lastSec = zeros.pop().length;
    return Math.max( firstSec, lastSec,
    ...zeros.map(i => i.length > 0 ? Math.floor((i.length + 1) / 2) : 0)
  );
};