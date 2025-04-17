/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    let pairs = 0
    let colors = new Array(n).fill(0)
    let ret = []

    // when changing, check if changing into/out of a pair and update tally accordingly
    for (let i = 0; i < queries.length; i++) {
        let target = queries[i][0]
        let color = queries[i][1]

        // console.log(colors)

        if (colors[target] == 0) {
            // was uncolored, cant have been a pair
        } else {
            // was a color, could be pair
            if (target - 1 >= 0 &&  colors[target] == colors[target-1]) {
                pairs--
            }
            if (target + 1 < colors.length &&  colors[target] == colors[target+1]) {
                pairs--
            } 
        }

        colors[target] = color

        if (target - 1 >= 0 &&  colors[target] == colors[target-1]) {
            pairs++
        }
        if (target + 1 < colors.length &&  colors[target] == colors[target+1]) {
            pairs++
        } 

        ret.push(pairs)
    }

    return ret
};