/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    const arr = [{moves: 0, pos: 0, speed: 1}]
    let best = Infinity;

    while (arr.length > 0) {
        let { moves, pos, speed } = arr.pop();
        
        if (pos === target) best = Math.min(best, moves)

        if (moves >= best) continue
        
        moves++
        const nextPos = pos + speed
        const nextSpeed = speed * 2
        arr.push({moves, pos: nextPos ,speed: nextSpeed});

        if ((nextPos > target && nextSpeed>0) || 
            (nextPos < target && nextSpeed<0)) {
            const resetSpeed = speed > 0 ? -1 : 1
            arr.push({moves, pos, speed: resetSpeed});
        }
    }

    return best
};