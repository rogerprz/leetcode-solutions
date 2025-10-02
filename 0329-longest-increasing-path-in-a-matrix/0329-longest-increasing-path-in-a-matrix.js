/**
 * @param {number[][]} matrix
 * @return {number}
 */
 const directions = [[0,1], [0,-1], [1,0], [-1, 0]]
var longestIncreasingPath = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const memo = new Map();

    const dfs = (row, col) => {
        const pos = `${row},${col}`
        if (memo.has(pos)) {
            return memo.get(pos) 
        }
        let tempMax = 1;
        const currNum = matrix[row][col]
        for (const [rd, cd] of directions) {
            const nextRow = row + rd;
            const nextCol = col + cd;
            const rowInbounds = nextRow >= 0 && nextRow < m;
            const colInbounds = nextCol >= 0 && nextCol < n;

            if (!rowInbounds || !colInbounds) {
                continue;
            }
            const num = matrix[nextRow][nextCol]

            if (num > currNum) {
                const res = dfs(nextRow, nextCol) + 1
                tempMax = Math.max(tempMax, res);
            
            }
        }
        memo.set(pos, tempMax)
        return tempMax;
    }
    
    let max = 0; 
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            max = Math.max(max, dfs(row, col))
        }
    }
    return max;
};