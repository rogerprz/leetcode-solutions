/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length === 0) 0;

    const deltas = [[0,1],[0,-1],[1,0],[-1,0]]
    const explore = (row, col) => {
        const rowInbounds = row >= 0 && row < grid.length;
        const colInbounds = col >= 0 && col < grid[0].length;

        if (!rowInbounds || !colInbounds || grid[row][col] === 0) {
            return 0
        }

        grid[row][col] = 0
        let area = 1

        for (const [rd, cd] of deltas) {
            const nextRow = row + rd;
            const nextCol = col + cd

            area += explore(nextRow, nextCol)
        }
        return area
    }

    let maxIsland = 0
    for (let row = 0; row < grid.length;row++) {
        for (let col = 0; col < grid[0].length;col++) {
            if (grid[row][col] === 1){
                maxIsland = Math.max(maxIsland, explore(row,col))
            }
        }
    }

    return maxIsland
};