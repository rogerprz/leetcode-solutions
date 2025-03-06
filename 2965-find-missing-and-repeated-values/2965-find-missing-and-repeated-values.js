/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const hash = {}

    const result = [false, false] // [9,]
    const set = new Set()
    const indexArray = new Array(grid.length * grid[0].length + 1).fill(false)
    indexArray[0] = true
    // [T,T,T,T,T,f,T,T,T,T]
    //  0,1,2,3,4,5,6,7,8,9
    for (const array of grid) {
        // [[9,1,7],[8,9,2],[3,4,6]]
        for (const num of array) {
            indexArray[num] = true;
            if (!(num in hash)) {
                hash[num] = true
            } else if (!result[0]) {
                result[0] = num
            }
        }
    }
    const second = indexArray.indexOf(false)
    result[1] = second

    return result
};