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
            // [0,0,0,1]
            if (seats[0] === 0 && left === 0) {
                const diff = i - left
                max = Math.max(max, diff)
            } else {
            // [1,0,0,0,1,0,1]
                const midDiff = Math.floor((i - left)/ 2)
                 max = Math.max(max, midDiff)
            }
            left = i
        }
        
        if (i === N - 1 && seats[N-1] === 0) {
            // [1,0,0,0]
            const diff = i - left;
            max = Math.max(max, diff)
        }
    }
    return max
};