/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    const area = {}; // key: islandId, value: area of that island
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let islandId = 2; // Start at 2 since 0/1 are used on grid
    let maxArea = 0;

    // DFS to label islands and calculate their area
    function dfsLabel(row, col, label) {
        const stack = [[row, col]];
        let total = 0;

        while (stack.length) {
            const [r, c] = stack.pop();
            if (r < 0 || r >= n || c < 0 || c >= n || grid[r][c] !== 1) continue;
            grid[r][c] = label;
            total++;
            for (const [dr, dc] of directions) {
                stack.push([r + dr, c + dc]);
            }
        }
        return total;
    }

    // 1st Pass: Label islands and compute their area
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

    // 2nd Pass: Try flipping each zero and see the area
    for (let r = 0; r < n; ++r) {
        for (let c = 0; c < n; ++c) {
            if (grid[r][c] === 0) {
                let neighbors = new Set();
                for (const [dr, dc] of directions) {
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

    // If there are no zeros, the grid is already one big island
    return maxArea === 0 ? n * n : maxArea;
};
