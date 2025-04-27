/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const cols = box[0].length;
    const rows = box.length;
    const res = Array.from({length: cols}, ()=> 0)
                    .map(()=> new Array(rows).fill('.'))
    console.log('R:', res)

    for (let row = 0; row < rows;row++) {
        let i = cols - 1;

        for (let col = cols - 1; col >= 0; col--) {
            if (box[row][col] === "#") {
                res[i][rows - row - 1] = "#";
                i--
            } else if (box[row][col] === "*") {
                res[col][rows - row - 1] = "*";
                i = col - 1;
            }
        }
    }
    return res;
};