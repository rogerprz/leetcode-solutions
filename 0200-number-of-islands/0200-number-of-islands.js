/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const visited = new Set();

    const explore = (row, col, visited) => {
        const rowInbounds = row >= 0 && row < grid.length;
        const colInbounds = col >= 0 && col < grid[0].length;

        if (!rowInbounds || !colInbounds || grid[row][col] === "0") {
            return false;
        }
        const pos = `${row},${col}`

        if (visited.has(pos)) {
            return false
        }
        visited.add(pos)

        explore(row + 1, col, visited)
        explore(row - 1, col, visited)
        explore(row, col + 1, visited)
        explore(row, col - 1, visited)
        
        return true;
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                if (explore(row, col, visited)) {
                    count++
                }
            }
        }
    }

    return count
};