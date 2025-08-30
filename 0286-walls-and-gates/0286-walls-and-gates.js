/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    // let output = Array.from({ length: rooms.length }, () => Array(rooms[0].length).fill(0))

    function dfs(i, j, distance) {
        if (i<0 || j<0 || i==rooms[0].length || j==rooms.length) {
            return 
        }
        let room = rooms[j][i]
        if (room <= 0) {
            return
        }
        if (room > distance) {
            rooms[j][i] = distance
            dfs(i+1, j, distance + 1)
            dfs(i-1, j, distance + 1)
            dfs(i, j+1, distance + 1)
            dfs(i, j-1, distance + 1)
        }
    }

    for (let j=0; j<rooms.length; j++) {
        for (let i=0; i<rooms[0].length; i++) {
            if (rooms[j][i]==0) {
                dfs(i-1, j, 1)
                dfs(i+1, j, 1)
                dfs(i, j-1, 1)
                dfs(i, j+1, 1)
            }
        }
    }
    return rooms
};