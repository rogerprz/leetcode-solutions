/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const map = new Map()

    for(const tile of tiles) {
        const value = (map.get(tile) || 0) + 1 
		map.set(tile, value);
	}

    return backtrack(map)
};

function backtrack(map) {
    let sum = 0;
    for(let [key, value] of map.entries()) {
        if(value === 0) continue;
        sum++;
        map.set(key, map.get(key) - 1);
        sum += backtrack(map);
        map.set(key, map.get(key) + 1);
    }
    return sum
}