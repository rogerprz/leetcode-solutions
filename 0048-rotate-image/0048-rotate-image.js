/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const N = matrix.length;
    
    for (let i = 0; i < matrix.length;i++) {
        for (let j = i + 1; j < matrix[0].length;j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    matrix.map((arr) => arr.reverse())

    return matrix
};