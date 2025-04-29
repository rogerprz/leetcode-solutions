/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let max = 0;

    let left = 0;
    const N = seats.length;
    for (let i = 0; i < N;i++) {
        const seat = seats[i];

        if (seat === 1) {
            // start
            if (seats[0] === 0 && left === 0) {
                const diff = i - left
                max = Math.max(diff, max)
            } else {
                // in between/mid
                const diff = Math.floor((i - left)/2)
                max = Math.max(diff, max)
            }
            left = i;
        }
        // end scenario
        if (seats[N - 1] === 0 && i === N - 1) {
                const diff = i - left;
                max = Math.max(diff, max)
        }
    }
    return max;
};