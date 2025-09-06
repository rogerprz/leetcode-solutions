/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let map = new Map()
    let size = 1;
    let zeros = []
    const visited = new Set();
    const deltas = [[0,1],[0,-1], [1,0], [-1,0]]
    const stack = []
    const explore = () => {
        
        while (stack.length > 0) {
            const [row,col] = stack.shift();
            map.set(size, map.get(size) + 1)
            grid[row][col] = size;
            for (const [rd, cd] of deltas) {
                const nextRow = row + rd;
                const nextCol = col + cd;
                const rowInbounds = nextRow >= 0 && nextRow < grid.length;
                const colInbounds = nextCol >= 0 && nextCol < grid[0].length;

                if (!rowInbounds || !colInbounds) {
                    continue;
                }
                const pos = `${nextRow},${nextCol}`
                const curr = grid[nextRow][nextCol]
                if (visited.has(pos)) continue
                visited.add(pos)
                if (curr === 1) {
                    stack.push([nextRow, nextCol])
                }
            }

        }
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const curr = grid[row][col]
            if (curr === 1) {
                size++
                map.set(size, 0)
                stack.push([row,col])
                explore()
            } else if (curr === 0) {
                zeros.push([row,col])
            }
        }
    }
    let max = 0;
    const exploreZeros = () => {
        const visited = new Set()
        let least = Infinity;
        let count = 0;
        while (stack.length > 0) {
            const [row, col] = stack.shift();
            let tempMax = 0;
            for (const [rd, cd] of deltas) {
                const nextRow = row + rd;
                const nextCol = col + cd;
                const rowInbounds = nextRow >= 0 && nextRow < grid.length;
                const colInbounds = nextCol >= 0 && nextCol < grid[0].length;
               
                if (!rowInbounds || !colInbounds) {
                    continue;
                }
                const key = grid[nextRow][nextCol]
                if (visited.has(key) || key === 0) continue

                const maxSize = map.get(key)
                visited.add(key)
                if (count === 0) {
                    tempMax += maxSize 
                    least = maxSize 
                    isSecond = true;
                } else if (count === 1) {
                    if (maxSize < least) {
                        least = maxSize
                    }
                    tempMax += maxSize
                } else {
                    if (maxSize > least) {
                        tempMax -= least 
                        least = maxSize 
                        tempMax += maxSize
                    } 
                }
            }
            max = Math.max(max, tempMax + 1)
        }
    }
    if (zeros.length === 0) {
        return map.get(2)
    }
    for (const [r, c] of zeros) {
        stack.push([r,c])
        exploreZeros()
    }

    return max
};