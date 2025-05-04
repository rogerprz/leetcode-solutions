/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const cantorPair = (a, b) => {
        let x = Math.min(a, b), y = Math.max(a, b);
        let sum = x + y;
        return (sum * (sum + 1)) / 2 + y;
    };

    let count = 0;
    let freq = new Map();
    for (let [a, b] of dominoes) {
        let pairValue = cantorPair(a, b);
        count += (freq.get(pairValue) || 0);
        freq.set(pairValue, (freq.get(pairValue) || 0) + 1);
    }
    return count;
};