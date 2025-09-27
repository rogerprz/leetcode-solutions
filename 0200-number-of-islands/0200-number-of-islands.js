/**
 * @param {character[][]} grid
 * @return {number}
 */
 const directions = [[0,1], [0,-1], [1,0], [-1,0]]
var numIslands = function(grid) {
    if (grid.length === 0) return 0;

    let islandCount = 0;
    const dfs = (row, col) => {
        const rowInbounds = row >= 0 && row < grid.length; 
        const colInbounds = col >= 0 && col < grid[0].length; 

        if (!rowInbounds || !colInbounds || grid[row][col] == 0) {
            return
        }
        grid[row][col] = 0 

        for (const [rd, cd] of directions) {
            const nRow = row + rd;
            const nCol = col + cd; 

            dfs(nRow, nCol)
        }
        return 1;
    } 

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                console.log('HERE:',grid[row][col] )
                dfs(row, col)
                islandCount++
            }
        }
    }

    return islandCount
};