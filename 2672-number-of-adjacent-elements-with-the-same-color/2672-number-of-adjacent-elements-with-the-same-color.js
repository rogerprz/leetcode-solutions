/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    let pairs = 0
    let colors = new Array(n).fill(0)
    let result = []

    for (let i = 0; i < queries.length; i++) {
        const [currIdx, color] = queries[i]
        const prevIdx = currIdx - 1;
        const nextIdx = currIdx + 1;
        // Remove old pairs if not zero
        if (colors[currIdx] !== 0) {
            // was uncolored, cant have been a pair
            // was a color, could be pair

            if (prevIdx >= 0 &&  colors[currIdx] == colors[prevIdx]) {
                pairs--
            }
            if (nextIdx < colors.length &&  colors[currIdx] == colors[nextIdx]) {
                pairs--
            } 
        }

        colors[currIdx] = color

        if (prevIdx >= 0 &&  colors[currIdx] == colors[prevIdx]) {
            pairs++
        }
        if (nextIdx < colors.length &&  colors[currIdx] == colors[nextIdx]) {
            pairs++
        } 

        result.push(pairs)
    }

    return result
};