/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const rows = box.length;
    const cols = box[0].length;

    const res = new Array(cols).fill(0).map(()=> new Array(rows).fill('.'))
    const STONE = "#";
    const WALL = "*";

    console.log("R:", res);

    for (let row = 0; row < rows;row++) {
        let resColIdx = cols - 1;
        for (let col = cols-1; col >= 0; col--) {
            let resRowIdx = rows - 1 - row;
            const curr = box[row][col]
            if (curr == STONE) {
                res[resColIdx][resRowIdx] = curr;
                resColIdx--
            }
            else if (curr === WALL) {
                res[col][resRowIdx] = curr;
                resColIdx = col - 1;
            }
        }
       
    }

    return res;
};

/**
[ 
    [ '.' ], 
    [ '.' ], 
    [ '#' ] ]
 for (let col = cols - 1; col >= 0; col--){
            let resRowsIdx = rows - row - 1;
            const curr = box[row][col]

            if (curr === STONE) {
                res[resColIdx][resRowsIdx] = curr;
                resColIdx--
            } else if (curr === WALL) {
                res[col][resRowsIdx] = curr;
                resColIdx = col - 1;
            }

        }
         */