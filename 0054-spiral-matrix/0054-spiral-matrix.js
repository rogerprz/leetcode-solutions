/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   const result = [];

   if (matrix.length === 0) return result;

   let top = 0;
   let bot = matrix.length - 1;
   let left = 0;
   let right = matrix[0].length - 1;

   while (top <= bot && left <= right) {
    // traverse l to r
    for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bot; i++) {
        result.push(matrix[i][right])
    }
    right--;

    if (top <= bot) {
        for (let i = right; i >= left; i--) {
            result.push(matrix[bot][i])
        }
        bot--;
    }
    if (left <= right) {
        for (let i = bot; i >= top; i--) {
            result.push(matrix[i][left])
        }
        left++
    }
   }
   return result;
};