/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // 0 empty
    // 1 orange
    // 2 rotting 
    let oranges = 0;
    let stack = [];
    for (let row = 0; row < grid.length;row++) {
        for (let col = 0; col < grid[0].length;col++) {
            const value = grid[row][col]
            if (value === 1) {
                oranges++
            }
            else if (value === 2) {
                stack.push([row,col, 0])
            }
        }
    }
    const deltas = [[0,1],[1,0], [-1, 0], [0, -1]]
    let maxLevel = 0
    while (stack.length > 0 && oranges > 0) {
        const [r, c, level] = stack.shift()
        const orange = grid[r][c]

        if (orange === 1) {
            oranges--
            grid[r][c] = 2
            maxLevel = level
        }
        for (const [row, col] of deltas) {
            const newRow = r + row
            const newCol = c + col
            const rowInbounds = newRow >= 0 && newRow < grid.length 
            const colInbounds = newCol >= 0 && newCol < grid[0].length;

            if (!rowInbounds || !colInbounds) continue

            if (grid[newRow][newCol] === 1) {
                stack.push([newRow, newCol, level + 1])
            }
        }
    }
    return oranges ? -1 : maxLevel
};