var hitBricks = function(grid, hits) {
    
    const output = new Array(hits.length).fill(0);
    
    
    // removing bricks from hits
    // if it is an empty space then marking it as -1 
    // so that we can differentiate later on whether it was an empty space or brick
    for (let i = 0; i < hits.length; i++) {
        
        if (grid[hits[i][0]][hits[i][1]] == 1) {
            
            grid[hits[i][0]][hits[i][1]] = 0
            
        } else {
            
            grid[hits[i][0]][hits[i][1]] = -1
            
        }
    }
    
    // looping over top row and running dfs to 
    // mark all of the bricks as 2 which are connected to top
    for (let j = 0; j < grid[0].length; j++) {
        markAndCount(0, j, grid)
    }
    
    
    // looping over hits array backwards and restoring bricks
    for (let i = hits.length-1; i >= 0; i-- ) {
        
        // if there was an empty space then skip the counting
        // of restored bricks else count how many bricks it has restored
        if (grid[hits[i][0]][hits[i][1]]  === -1 ) continue;
        
        grid[hits[i][0]][hits[i][1]] = 1 // restored brick
        
        // if the restored brick is not connected to previously marked bricks
        // which are not falling then it will not restore new bricks;
        if (!isConnectedToTop(hits[i][0], hits[i][1], grid)) continue;
        // saving the number of restored bricks
        output[i] = markAndCount(hits[i][0], hits[i][1], grid) - 1
        
    }
    
    
    return output;
    
    
}


// it traverse the grid and mark bricks connected witj top as 2
// and also gives back the number of added brick when restoring a hit

function markAndCount (i, j, grid) {
   
    // in this if condition the last grid[i][j] != 1 check is important
    // because with this we are disregarding the previously counted nodes
    // and empty spaces
    if (i >= grid.length || 
        j >= grid[0].length || 
        i < 0 || 
        j < 0 || 
        grid[i][j] != 1) return 0;
    
    let restored = 1;
    
    // marking the visited cell as 2
    grid[i][j] = 2
    
    restored += markAndCount(i+1, j, grid);
    restored += markAndCount(i-1, j, grid);
    restored += markAndCount(i, j+1, grid);
    restored += markAndCount(i, j-1, grid);
    
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
