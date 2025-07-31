/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    const res = new Set();
    let prev = new Set();

    for (const num of arr) {
        const curr = new Set([num]);

        for (const val of prev) {
            curr.add(val | num);
        }
        prev = curr;
        for (const val of curr) {
            res.add(val)
        }
    }
    return res.size
};