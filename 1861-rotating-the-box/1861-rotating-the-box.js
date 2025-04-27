/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
  let rows = boxGrid.length;
  let cols = boxGrid[0].length;

  const res = Array.from({length: cols}, ()=> 0).map(()=>{
    return new Array(rows).fill('.')
  })
  const STONE = '#';
  const WALL = '*';

  for (let row = 0; row < rows;row++) {
    let resColIdx = cols - 1;

    for (let col = cols - 1; col >= 0; col--) {
        const curr = boxGrid[row][col]
        let resRowIdx = rows - row - 1; 

        if (curr === STONE) {
            res[resColIdx][resRowIdx] = STONE;
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