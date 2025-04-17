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
            // [0,0,0,1]
            if (seats[0] === 0 && left === 0) {
                const diff = i - left; 
                max = Math.max(max, diff)
            } else {
            // [1,0,x,0,1,0,1]
                const midDiff = Math.floor((i - left)/2);
                max = Math.max(max, midDiff)
            }
            left = i
            // [1,0,0,0]
        } else if (seats[seats.length-1] === 0 && i === seats.length - 1) {
            const diff = i - left
            max = Math.max(max, diff)
        }
    }

    return max
};