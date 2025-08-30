/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const GATE = 0;
    const ROOM = 2147483647;

    let queue = [];
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            const curr = rooms[row][col]
            if (curr === GATE) {
                queue.push({row, col, pos: 0})
            }
        }
    }
    const deltas = [[0,1], [0,-1],[1,0],[-1,0]]
    while (queue.length > 0) {
        let {row, col, pos} = queue.shift()
        pos++
        for (const [r, c] of deltas) {
            const currRow = row + r
            const currCol = col + c
            const rowInbounds = currRow >= 0 && currRow < rooms.length;
            const colInbounds = currCol >= 0 && currCol < rooms[0].length;
            if (!rowInbounds || !colInbounds) {
                continue
            }
            const currRoom = rooms[currRow][currCol]
            if (currRoom === ROOM) {
                rooms[currRow][currCol] = pos
                queue.push({row: currRow, col: currCol, pos})
            }
        }
       
    }
    return rooms
};