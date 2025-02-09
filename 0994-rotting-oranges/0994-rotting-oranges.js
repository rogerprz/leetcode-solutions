/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let oranges = 0
    const queue = []
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const curr = grid[row][col]
            if (curr === 1) {
                oranges++
            } else if (curr === 2) {
                queue.push({row, col, min: 0})
            }
        }
    }
    /**
    o: 6
    r: 2
    [2,1,1],
    [1,1,0],
    [0,1,1]]
     */
    const deltas = [[0,1],[1,0],[-1, 0],[0,-1]]
    let max = 0
    while (queue.length > 0) {
        const {row, col, min} = queue.shift()
        const curr = grid[row][col]
        if (curr === 1) {
            grid[row][col] = 2
            oranges--
            max = Math.max(min, max)
        }
        for (const [currRow, currCol] of deltas) {
            const nextRow = currRow + row
            const nextCol = currCol + col

            const rowInbounds = nextRow >= 0 && nextRow < grid.length;
            const colInbounds = nextCol >= 0 && nextCol < grid[0].length;
            if (!rowInbounds || !colInbounds) continue
            if (grid[nextRow][nextCol] === 1) {
                queue.push({row: nextRow, col: nextCol, min: min + 1})
            }
        }
    }

    return oranges === 0 ? max : -1
};