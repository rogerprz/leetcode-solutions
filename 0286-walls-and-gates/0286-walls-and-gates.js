/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const WALL = -1;
    const GATE = 0;
    const ROOM = 2147483647;
    /**
    [INF,-1,0,INF],
    [INF,INF,INF,-1],
    [INF,-1,INF,-1],
    [0,-1,INF,INF]]
     */
     const walls = new Set()
    let queue = [];
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            const curr = rooms[row][col]

            if (curr === GATE) {
                queue.push({row, col, pos: 0})
            } else if ( curr === WALL) {
                walls.add(`${row},${col}`)
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
 function explore(row, col , rooms, pos, visited, walls) {
    const rowInbounds = row >= 0 && row < rooms.length;
    const colInbounds = col >= 0 && col < rooms[0].length;

    if (!rowInbounds || !colInbounds) {
        return
    }

    const curPos = `${row},${col}`
    if (walls.has(curPos)) {
        return 
    }
    if (visited.has(curPos) && rooms[row][col] <= pos) {
        return
    }

    if (rooms[row][col] > 0 || visited.has(curPos)) {
        rooms[row][col] = Math.min(rooms[row][col], pos)
    }
    visited.add(curPos)
    pos++
    explore(row + 1, col, rooms, pos, visited, walls)
    explore(row - 1, col, rooms, pos, visited, walls)
    explore(row, col + 1, rooms, pos, visited, walls)
    explore(row, col - 1, rooms, pos, visited, walls)

}