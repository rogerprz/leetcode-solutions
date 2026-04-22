/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let perimeter = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                // Assume 4 edges
                perimeter += 4;
                // If there's land above, subtract the shared edge (from both cells)
                if (0 < r && grid[r - 1][c] === 1) {
                    perimeter -= 2;
                }
                // If there's land to the left, subtract the shared edge (from both cells)
                if (c > 0 && grid[r][c - 1] === 1) {
                    perimeter -= 2;
                }
            }
        }
    }

    return perimeter;
};