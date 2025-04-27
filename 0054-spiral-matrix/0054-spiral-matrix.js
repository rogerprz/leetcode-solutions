/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = [];

    if (matrix.length === 0) return res;

    let top = 0;
    let left = 0;
    let bot = matrix.length - 1;
    let right = matrix[0].length - 1;

    while (top <= bot && left <= right) {
        /**
         0,1,2
        [1,2,3], 0
        [4,5,6], 1 
        [7,8,9], 2
         */
        for (let i = left; i <= right;i++) {
            res.push(matrix[top][i])
        }
        top++
        for (let i = top; i <= bot;i++) {
            res.push(matrix[i][right])
        }
        right--
        
        if (top <= bot) {
            for (let i = right; i >= left;i--) {
                res.push(matrix[bot][i])
            }
            bot--
        }

        if (left <= right) {
            for (let i = bot; i >= top;i--) {
                res.push(matrix[i][left])
            }
            left++
        }

    }
    return res;
};