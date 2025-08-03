/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const list = []
    if (numRows < 1)  return list

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        const row = new Array(rowNum + 1).fill(1)

        for (let j = 1; j < row.length - 1; j++) {
            const prevRow = rowNum - 1;
            const prevIdx = j - 1;
            const prevNumLeft = list[prevRow][prevIdx]
            row[j] = prevNumLeft + list[prevRow][j]
        }
        list.push(row)
    }
    return list
};