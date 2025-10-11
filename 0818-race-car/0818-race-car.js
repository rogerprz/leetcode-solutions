/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    const stack = [{moves: 0, pos: 0, speed: 1}]

    let least = Infinity

    while (stack.length > 0) {
        let {moves, pos, speed} = stack.pop()

        if (pos === target) least = Math.min(least, moves)

        if (moves < least) {
            moves++ 
            const nextSpeed = speed * 2;
            const nextPos = pos + speed;

            stack.push({moves, pos: nextPos, speed: nextSpeed})

            const wentOver = nextPos > target && speed > 0;
            const revWentOver = nextPos < target && speed < 0;
            if (wentOver || revWentOver) {
                const resetSpeed = speed > 0 ? -1 : 1;
                stack.push({ moves, pos, speed: resetSpeed })
            }
        }
    }
    
    return least
};