/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    const colors = new Array(n).fill(0)
    let pairs = 0;
    let res = []
    for (let i = 0; i < queries.length;i++) {
        const [idx, color] = queries[i]
        const prevIdx = idx - 1;
        const nextIdx = idx + 1;

        if (colors[idx] !== 0) {
            if (prevIdx >= 0 && colors[idx] === colors[prevIdx]) pairs--
            if (nextIdx < colors.length && colors[idx] === colors[nextIdx]) pairs--
        }
        colors[idx] = color

        if (prevIdx >= 0 && colors[idx] === colors[prevIdx]) pairs++
        if (nextIdx < colors.length && colors[idx] === colors[nextIdx]) pairs++
        res.push(pairs)
    }
    return res
};