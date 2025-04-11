/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length <= 1) return matrix 
    const n = matrix.length;
    
    for (var i = 0; i < Math.floor((n + 1) / 2); i++) {
        for (var j = 0; j < Math.floor(n / 2); j++) {
            var temp = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    return matrix
};