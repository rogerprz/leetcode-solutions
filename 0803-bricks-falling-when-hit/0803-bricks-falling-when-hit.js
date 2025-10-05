var hitBricks = function(grid, hits) {
    const H = hits.length;
    const output = new Array(H).fill(0);
    // removing bricks from hits
    // if it is an empty space then marking it as -1 
    // so that we can differentiate later on whether it was an empty space or brick
    for (let i = 0; i < H; i++) {
        const [row,col] = hits[i]
        if (grid[row][col] == 1) grid[row][col] = 0
        else grid[row][col] = -1
    }
    // looping over top row and running dfs to 
    // mark all of the bricks as 2 which are connected to top
    for (let col = 0; col < grid[0].length; col++) {
        markAndCount(0, col, grid)
    }
    // looping over hits array backwards and restoring bricks
    for (let i = H-1; i >= 0; i-- ) {
        const [row, col] = hits[i]
        // if there was an empty space then skip the counting
        // of restored bricks else count how many bricks it has restored
        if (grid[row][col]  === -1 ) continue;
        
        grid[row][col] = 1 // restored brick
        
        // if the restored brick is not connected to previously marked bricks
        // which are not falling then it will not restore new bricks;
        if (!isConnectedToTop(row, col, grid)) continue;
        // saving the number of restored bricks
        output[i] = markAndCount(row, col, grid) - 1
    }
    
    return output;
}
const directions = [[0,1],[1,0],[-1,0],[0,-1]]
// it traverse the grid and mark bricks connected witj top as 2
// and also gives back the number of added brick when restoring a hit
function markAndCount (row, col, grid) {
    // in this if condition the last grid[i][j] != 1 check is important
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

function isConnectedToTop (i,j, grid) {
    if ( i == 0 ||
        (grid[i-1] && grid[i-1][j] == 2) ||
        (grid[i+1] && grid[i+1][j] == 2) ||
        grid[i][j-1] == 2 ||
        grid[i][j+1] == 2) return true;
        
    return false
}
