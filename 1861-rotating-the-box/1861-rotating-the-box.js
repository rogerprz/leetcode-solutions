/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    let rows = boxGrid.length;
    let cols = boxGrid[0].length;

    let res = new Array(cols).fill(0).map(() => new Array(rows).fill("."))
    const STONE = "#";
    const WALL = "*"

    for (let row = 0; row < rows; row++) {
        let resColIdx = cols - 1;
        for (let col = cols -1; col >= 0; col--) {
            let resRowIdx = rows - 1 - row;
            const curr = boxGrid[row][col];
            if (curr === STONE) {
                res[resColIdx][resRowIdx]= curr;
                resColIdx--
            }
            if (curr === WALL) {
                res[col][resRowIdx] = curr;
                resColIdx = col - 1;
            }
        }
    }

    return res;
};