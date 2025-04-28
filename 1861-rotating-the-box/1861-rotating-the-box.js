/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
  let rows = boxGrid.length;
  let cols = boxGrid[0].length;

    // create a tranposed array. 
  const res = Array.from({length: cols}, ()=> 0).map(()=>{
    return new Array(rows).fill('.')
  })
  const STONE = '#';
  const WALL = '*';

  for (let row = 0; row < rows;row++) {
    // set col idx of the res array
    let resColIdx = cols - 1;
    // start col from end of grid going down
    for (let col = cols - 1; col >= 0; col--) {
        // get curr grid box 
        const curr = boxGrid[row][col]
        // start at end row - sub curr row - 1 for offset
        let resRowIdx = rows - row - 1; 
        // if we find stone
        if (curr === STONE) {
            // we set res box with flipped col idx and row idx
            res[resColIdx][resRowIdx] = STONE;
            // we sub resCol idx since it's been assign
            resColIdx--
        }
        else if (curr === WALL) {
            
            res[col][resRowIdx] = WALL;
            resColIdx = col - 1; 
        }
    }
  }
  return res;
};