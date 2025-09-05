/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let map = new Map()

    const explore = (row, col) => {
        const rowInbounds = row >= 0 && row < matrix.length;
        const colInbounds = col >= 0 && col < matrix[0].length;

        if (!rowInbounds || !colInbounds){
            return 0
        }

        const pos = `${row},${col}`;
        if (map.has(pos)) {
            return map.get(pos)
        }

        let maxPath = 1
        const currNum = matrix[row][col]
        
        const directions = [[0,1], [0,-1], [1,0], [-1,0]]
        for (const [dr, dc] of directions) {
            const newRow = row + dr
            const newCol = col + dc
            const rowInbounds = newRow >= 0 && newRow < matrix.length
            const colInbounds = newCol >= 0 && newCol < matrix[0].length
            
            if (rowInbounds && colInbounds && matrix[newRow][newCol] > currNum) {
                maxPath = Math.max(maxPath, 1 + explore(newRow, newCol))
            }
        }

        map.set(pos, maxPath)
        return maxPath
    }
    
    let max = 1
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            max = Math.max(max, explore(row, col))
        }
    }
    return max
};