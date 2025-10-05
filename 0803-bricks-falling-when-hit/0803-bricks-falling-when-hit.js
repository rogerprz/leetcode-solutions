const directions = [[0,1],[1,0],[-1,0],[0,-1]]

var hitBricks = function(grid, hits) {
    const H = hits.length;
    const output = new Array(H).fill(0);
    for (let i = 0; i < H; i++) {
        const [row,col] = hits[i]
        if (grid[row][col] == 1) grid[row][col] = 0 // valid hit
        else grid[row][col] = -1 // empty hit
    }
    // Mark top row as 2 + neighbors
    for (let col = 0; col < grid[0].length; col++) {
        markAndCount(0, col, grid)
    }
    // loop over hits array backwards and restoring bricks
    for (let i = H-1; i >= 0; i--) {
        const [row, col] = hits[i]
        if (grid[row][col] === -1 ) continue; // skip empty space
        
        grid[row][col] = 1 // restored brick
        // if the restored brick is not connected to previously marked bricks
        // which are not falling then it will not restore new bricks;
        if (isConnectedToTop(row, col, grid)) {
            // saving the number of restored bricks
            output[i] = markAndCount(row, col, grid) - 1
        }
    }
    
    return output;
}
// it traverse the grid and mark bricks connected with top as 2
// and also gives back the number of added brick when restoring a hit
function markAndCount (row, col, grid) {
    // in this if condition the last grid[row][col] != 1 check is important
    // because with this we are disregarding the previously counted nodes
    // and empty spaces
    const rowInbounds =  row >= 0 && row < grid.length  
    const colInbounds =  col >= 0 && col < grid[0].length
    if (!rowInbounds ||  !colInbounds || grid[row][col] != 1) {
        return 0;
    }
    let restored = 1;
    // marking the visited cell as 2
    grid[row][col] = 2

    for (const [rd, cd] of directions) {
        restored += markAndCount(row + rd, col + cd, grid);
    }

    return restored
}

function isConnectedToTop (row,col, grid) {
    if (row === 0) return true
    for (const [rd, cd] of directions) {
        const nextRow = row + rd;
        const nextCol = col + cd;
        const rowInbounds = nextRow >= 0 && nextRow < grid.length
        const colInbounds = nextCol >= 0 && nextCol < grid[0].length
        
        if (!rowInbounds || !colInbounds)  continue
        if (grid[nextRow][nextCol] === 2) {
            return true;
        } 
    }
    return false
}

function inBounds(row, col) {
    const rowInbounds = row >= 0 && row < grid.length
    const colInbounds = col >= 0 || col < grid[0].length
    if (!rowInbounds || !colInbounds)  true;
    return false
}