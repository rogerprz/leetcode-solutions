/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const cols = box[0].length;
    const rows = box.length;
    const res = Array.from({length: cols}, ()=> 0)
                    .map(()=> new Array(rows).fill('.'))
    const STONE = "#";
    const WALL = "*"
    /**
    [
        ['#', '#', '*', '.', '*', '.'], 
        ['#', '#', '#', '*', '.', '.'], 
        ['#', '#', '#', '.', '#', '.']
        ]
    [
        ['.', '.', '.'], 
        ['.', '.', '.'], 
        ['.', '.', '.'], 
        ['.', '.', '.'], 
        ['.', '.', '.'], 
        ['.', '.', '.']
        ]
     */
    for (let row = 0; row < rows;row++) {
        let resColIdx = cols - 1;

        for (let col = cols - 1; col >= 0; col--) {
            const currPos = box[row][col]
            const resRowIdx = rows - row - 1
            if (currPos === STONE) {
                res[resColIdx][resRowIdx] = STONE;
                resColIdx--
            } else if (currPos === WALL) {
                res[col][resRowIdx] = WALL;
                resColIdx = col - 1;
            }
        }
    }
    return res;
};