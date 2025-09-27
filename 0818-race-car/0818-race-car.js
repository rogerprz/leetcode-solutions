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
        arr.push({moves, pos: pos+speed, speed: 2*speed});

        if ((pos+speed>target && speed>0) || 
            (pos+speed<target && speed<0)) {
            arr.push({moves, pos, speed: speed > 0 ? -1 : 1});
        }
    }

    return best
};