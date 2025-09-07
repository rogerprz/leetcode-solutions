/**
 * @param {number[][]} grid
 * @return {number}
 */

const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];

var shortestDistance = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let total = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    let EMPTY = 0;
    let minDist = Number.MAX_SAFE_INTEGER;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 1) {
                let queue = [[row, col]];
                let steps = 0;
                while (queue.length > 0) {
                    steps++;
                    for (let level = queue.length; level > 0; level--) {
                        let [rd, cd] = queue.shift();

                        for (const [r,c] of deltas) {
                            const nextRow = rd + r
                            const nextCol = cd + c

                            const rowInbounds = nextRow >= 0 && nextRow < rows
                            const colInbounds = nextCol >= 0 && nextCol < cols
                            if (rowInbounds && colInbounds && grid[nextRow][nextCol] === EMPTY) {
                                grid[nextRow][nextCol]--;
                                total[nextRow][nextCol] += steps;
                                queue.push([nextRow, nextCol]);
                            }
                        }
                    }
                }
                EMPTY--;
            }
        }
    }

    // Find minimum distance from cells that can reach all buildings
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == EMPTY) {
                minDist = Math.min(minDist, total[row][col]);
            }
        }
    }

    return minDist == Number.MAX_SAFE_INTEGER ? -1 : minDist;
};