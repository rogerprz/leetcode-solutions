/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 let changeDirection = {
    'right': 'down',
    'down' : 'left',
    'left' : 'up',
    'up':'right'
 }
var spiralOrder = function(matrix) {
    let rowStart = 0, rowEnd = matrix.length - 1
    let colStart = 0, colEnd = matrix[0].length - 1
    let row = 0, col = 0, count = 0
    
    let total = matrix.length * matrix[0].length
    let result = []
    let direction = 'right'
    while (total !==count) {
        const current = matrix[row][col]
        result.push(current)
        count++
        if (direction === "right") {
            if (col === colEnd) {
                direction = changeDirection[direction]
                rowStart++
                row++
            } else {
                col++
            }
            
        } else if (direction === "down"){
            if (row === rowEnd) {
                direction = changeDirection[direction]
                colEnd--
                col--
            } else {
                row++
            }
        }
        else if (direction === "left"){
            if (col === colStart) {
                direction = changeDirection[direction]
                rowEnd--
                row--
            } else {
                col--
            }
        }
        else {
            if (row === rowStart) {
                direction = changeDirection[direction]
                colStart++
                col++
            } else {
                row--
            }
        }
    }
    return result
};