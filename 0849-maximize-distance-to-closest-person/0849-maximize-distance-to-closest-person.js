/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let max = 0;
    let left = 0; 
    let right = 0;

    for (let i = 0; i < seats.length; i++) {
        const seat = seats[i];

        if (seat === 1) {
            right = i;
            const firstSeat = left === 0 && seats[0] === 0
            if (firstSeat) {
                const diff = right - left
                max = Math.max(diff, max)
            }
            else {
                const midDiff = Math.floor((right - left)/ 2)
                max = Math.max(midDiff, max);
            }
            left = right;
        }
        else if (i === seats.length - 1) {
            max = Math.max(max, i - left);
        }
    }

    if (right != seats.length - 1) {
        max = Math.max(max, seats.length - 1 - right);
    }

    return max
};