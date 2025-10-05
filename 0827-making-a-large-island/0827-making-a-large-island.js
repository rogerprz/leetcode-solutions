/**
 * @param {number[][]} grid
 * @return {number}
 */
const directions = [[0,1],[0,-1],[1,0],[-1,0]]
var largestIsland = function(grid) {
    let max = 0;
    let map = new Map();
    const N = grid.length;
    const dfs = (r, c, islandId) => {
        const queue = [[r, c]];
        let count = 0;
        while (queue.length) {
            const [row, col] = queue.shift();
            if (grid[row][col] !== 1) continue;
            grid[row][col] = islandId;
            count++;
            for (const [dr, dc] of directions) {
            const nextRow = row + dr
            const nextCol = col + dc;
            if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= N) continue;
            if (grid[nextRow][nextCol] === 1) queue.push([nextRow, nextCol]);
            }
        }
        map.set(islandId, count);
    };
    let islandIdx = 1
    for (let row = 0; row < grid.length;row++) {
        for (let col = 0; col < grid[0].length;col++) {
            if (grid[row][col] === 1) {
                islandIdx++
                dfs(row, col, islandIdx)
            }
        }    
    }
    const zeroIsland = (r, c) => {
        let maxIsland = 1
        let visited = new Set()
        for (const [rd, cd] of directions) {
            const nextRow = r + rd;
            const nextCol = c + cd;
            if (
                nextRow >= 0 && nextRow < grid.length &&
                nextCol >= 0 && nextCol < grid[0].length
            ) {
                const neighborId = grid[nextRow][nextCol];
                if (neighborId > 1 && !visited.has(neighborId)) {
                    visited.add(neighborId);
                    maxIsland += map.get(neighborId);
                }
            }
        }
        return maxIsland
    }
    /**
    [2,2,0],
    [0,0,3],
    [0,0,3]
    2: 2
    3:1
     */
    for (let row = 0; row < grid.length;row++) {
        for (let col = 0; col < grid[0].length;col++) {
            if (grid[row][col] === 0) {
                max = Math.max(max, zeroIsland(row, col))
            }
        }    
    }
    return max === 0 ? N * N : max
};