/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    /**
    0 = empty 
    1 = orange 
    2 = rotten
    [2,1,1],
    [1,1,0],
    [0,1,1]
     */
    //  we want to track fresh oranges 
    // BFS to make orange rotten. 
    const queue = []
    let oranges = 0
    for (let row = 0; row < grid.length;row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const value = grid[row][col]

            if (value === 1) {
                oranges++
            } else if (value === 2) {
                queue.push([row, col, 0])
            }
        }
    }
    // orangs 6 
    // [0,0,0]
    let time = 0
    const deltas = [[0,1],[1,0],[0,-1],[-1,0]] // N,W,S,E
    while (queue.length > 0) {
        const [row, col, mins] = queue.shift()
        const currValue = grid[row][col]
        if (currValue === 1) {
            grid[row][col] = 2
            oranges--
            time = Math.max(mins, time)
        }
        for (const [r, c] of deltas) {
            const nextRow = row + r;
            const nextCol = col + c
            // we may need to check outbounds 
            if (nextRow < 0 || nextRow > grid.length -1) continue
            if (nextCol < 0 || nextCol > grid[0].length - 1) continue
            if (grid[nextRow][nextCol]=== 1) {
                queue.push([nextRow, nextCol, mins + 1])
            }
        }
    }
    return oranges === 0 ? time : -1
};