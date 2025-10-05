/**
 * @param {number[][]} grid
 * @return {number}
 */
const directions = [[0,1],[1,0], [-1,0], [0,-1]];

var largestIsland = function(grid) {
    const M = grid.length;
    const N = grid[0].length
    const map = new Map()
    const dfs = (row, col, islandId) => {

        grid[row][col] = islandId
        if (!map.has(islandId)) {
            map.set(islandId, 0)
        }
        map.set(islandId,(map.get(islandId) || 0) + 1)

        for (const [rd, cd] of directions) {
            const nextRow = row + rd;
            const nextCol = col + cd;

            if (!inBounds(nextRow, nextCol, grid)){
                continue
            }
            if (grid[nextRow][nextCol] === 1) {
                dfs(nextRow, nextCol, islandId)
            }
        }
    }
    let islandId = 1
    let zeroQueue = []
    for (let row = 0; row < M; row++) {
        for (let col = 0; col < N; col++) {
            if (grid[row][col] === 1) {
                islandId++
                dfs(row, col, islandId)
            } else if (grid[row][col] === 0) {
                zeroQueue.push([row,col])
            }
        }
    }
    let max = 0;
    for (let row = 0; row < M;row++) {
       for (let col = 0; col < N;col++) {
            let tempMax = 0;
            let visited = new Set()
            if (grid[row][col] !== 0) continue 
            for (const [rd,cd] of directions) {
                const nextRow = row + rd;
                const nextCol = col + cd;
                if (inBounds(nextRow, nextCol, grid)) {
                    const next = grid[nextRow][nextCol]
                    if (next > 1 && !visited.has(next)) {
                        visited.add(next)
                        tempMax += map.get(next)
                    }
                }
            }
            max = Math.max(max, tempMax + 1)
       }
    }

    return max === 0 ? M * N : max;
};

function inBounds(row, col, grid) {
    const rowInbounds = row < 0 || row >= grid.length;
    const colInbounds = col < 0 || col >= grid[0].length;

    if (rowInbounds || colInbounds) {
        return false;
    }
    return true 
}