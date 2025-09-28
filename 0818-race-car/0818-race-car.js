/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    const stack = [{moves: 0, pos: 0, speed: 1}]

    let best = Infinity;

    while (stack.length > 0) {
        let {moves, pos, speed} = stack.pop()

        if (pos === target) best = Math.min(best, moves)

        if (moves < best){
            moves++
            const nextPos = pos + speed;
            const nextSpeed = speed * 2;
            stack.push({moves, pos: nextPos, speed: nextSpeed})

            if ((nextPos > target && speed > 0) || nextPos < target && speed < 0) {
                const resetSpeed = speed > 0 ? -1 : 1;
                stack.push({moves, pos, speed: resetSpeed})
            } 
        }
    }

    return best
};