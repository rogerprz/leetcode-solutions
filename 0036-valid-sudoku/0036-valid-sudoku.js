/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // we need to create a set to find if row has repeating value
    // we need to create a set to save column values
    // we need to get a set so we can detect box. 

    // loop through first array
    for (let i = 0; i< board.length;i++) {
        const row = new Set();
        const col = new Set();
        const box = new Set();

        for (let j = 0; j < board[i].length; j++) {
            const currRow = board[i][j]
            const currCol = board[j][i]

            const xIdx = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const yIdx = ((i * 3) % 9) + (j % 3)
            const currBox = board[xIdx][yIdx]

            if (row.has(currRow)) return false 
            if (col.has(currCol)) return false 
            if (box.has(currBox)) return false 

            if (currRow != '.') row.add(currRow)
            if (currCol != '.') col.add(currCol)
            if (currBox != '.') box.add(currBox)
        }
    }
    return true
};

/**

 for (let i = 0; i< board.length; i++) {
        const row = new Set()
        const col = new Set();
        const box = new Set();
        for (let j=0; j< board[i].length; j++) {
            const currRowElem = board[i][j]
            const currColElem = board[j][i]

            const xIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const yIndex = ((i * 3) % 9) + (j % 3)
            const currBoxElem = board[xIndex][yIndex];

            if (row.has(currRowElem)) return false 
            if (col.has(currColElem)) return false 
            if (box.has(currBoxElem)) return false

            if (currRowElem != ".") row.add(currRowElem)
            if (currColElem != ".") col.add(currColElem)
            if (currBoxElem != '.') box.add(currBoxElem)
        }
    }
    return true */