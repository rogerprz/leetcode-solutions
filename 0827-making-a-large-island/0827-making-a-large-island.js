/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    const area = {}; // key: islandId, value: area of that island
    const deltas = [[1,0],[-1,0],[0,1],[0,-1]];
    let islandId = 2;
    let maxArea = 0;

    function dfsLabel(row, col, label) {
        const stack = [[row, col]];
        let total = 0;

        while (stack.length) {
            const [row, col] = stack.pop();
            const rowInbounds = row < 0 || row >= n
            const colInbounds =  col < 0 || col >= n 
            if (rowInbounds || colInbounds || grid[row][col] !== 1) continue;
            grid[row][col] = label;
            total++;
            for (const [dr, dc] of deltas) {
                stack.push([row + dr, col + dc]);
            }
        }
        return total;
    }

    for (let r = 0; r < n; ++r) {
        for (let c = 0; c < n; ++c) {
            if (grid[r][c] === 1) {
                const currArea = dfsLabel(r, c, islandId);
                area[islandId] = currArea;
                maxArea = Math.max(maxArea, currArea);
                islandId++;
            }
        }
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                let neighbors = new Set();
                for (const [dr, dc] of deltas) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] > 1) {
                        neighbors.add(grid[nr][nc]);
                    }
                }
                let sum = 1; // The 0 itself is flipped to 1
                for (const nid of neighbors) {
                    sum += area[nid];
                }
                maxArea = Math.max(maxArea, sum);
            }
        }
    }

    return maxArea === 0 ? n * n : maxArea;
};
