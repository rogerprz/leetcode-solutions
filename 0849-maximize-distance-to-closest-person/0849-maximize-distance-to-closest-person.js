/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let max = 0;
    let left = 0; 

    for (let i = 0; i < seats.length; i++) {
        const seat = seats[i];

        if (seat === 1) {
            const firstSeat = left === 0 && seats[0] === 0
            if (firstSeat) {
                const diff = i - left
                max = Math.max(diff, max)
            }
            else {
                const midDiff = Math.floor((i - left)/ 2)
                max = Math.max(midDiff, max);
            }
            left = i;
        }
        else if (i === seats.length - 1) {
            max = Math.max(max, i - left);
        }
    }

    return max
};