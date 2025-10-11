/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    const stack = [{moves: 0, pos: 0, speed: 1}]

    let lowMoves = Infinity;
    // target = 3
    // stack = [{}]
    // Output: 2
    while (stack.length > 0) {
        let { moves, pos, speed } = stack.pop()
        // pos = 0
        // moves = 0
        // speed = 1
        if (pos === target) {
            lowMoves = Math.min(lowMoves, moves)
        }
        if (moves < lowMoves) {
            moves++
            const nextPos = pos + speed;
            const nextSpeed = speed * 2;

            stack.push({moves, pos: nextPos, speed: nextSpeed})

            const weOvershot = nextPos > target && speed > 0
            const weRevOvershot = nextPos < target && speed < 0
            if (weOvershot ||  weRevOvershot) {
                const resetSpeed = speed > 0 ? -1 : 1
                stack.push({moves, pos, speed: resetSpeed })
            }
        }
    }
    return lowMoves
};