/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    const colors = new Array(n).fill(0)
    let pairs = 0;
    const N = colors.length;
    const res = []
    for (let i = 0; i < queries.length;i++) {
        const [currIdx, color] = queries[i]
        const nextIdx = currIdx + 1;
        const prevIdx = currIdx - 1;

        if (colors[currIdx] !== 0) {
            if (prevIdx >= 0 && colors[currIdx] === colors[prevIdx]) {
                pairs--
            }
            if (nextIdx < N  && colors[currIdx] === colors[nextIdx]) {
                pairs--
            }
        }
        colors[currIdx] = color;

        if (prevIdx >= 0 && colors[currIdx] === colors[prevIdx]) {
            pairs++
        }
        if (nextIdx < N && colors[currIdx] === colors[nextIdx]) {
            pairs++
        }
        res.push(pairs)
    }

    return res;
};