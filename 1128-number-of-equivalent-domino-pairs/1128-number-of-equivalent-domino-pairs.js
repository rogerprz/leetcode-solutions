/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let count = 0;
    let map = new Map();

    for (let [a, b] of dominoes) {
        let key = a < b ? `${a}${b}` : `${b}${a}`;

        if (!map.has(key)) {
            map.set(key, 0);
            continue;
        }

        let current = map.get(key) + 1;
        map.set(key, current);
        count += current;
    }

    return count;
};