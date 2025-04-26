/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    if (matrix.length === 0) return res;

    let top = 0, left = 0;
    let bot = matrix.length - 1;
    let right = matrix[0].length - 1;


    while (top <= bot && left <= right) {
        // traverse l to r 
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++
        // traverse top to bot 
        for (let i = top; i <= bot; i++) {
            res.push(matrix[i][right])
        }
        right--
        // Check if we still have rows and columns to process
        if (top <= bot) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bot][i])
            }
            bot--
        }
        // 3. Traverse left (bottom row)

        if (left <= right) {
            for (let i = bot; i >= top; i--) {
                res.push(matrix[i][left])
            }
            left++
        }
        // 4. Traverse up (leftmost column)
    }

    

    return res;
};