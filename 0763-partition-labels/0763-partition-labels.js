/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last = -1;
    const res = [];
    let left = 0;
    //  "ababcc" can be partitioned into ["abab", "cc"]
    for (let i = 0; i < s.length; i++) {
        const lastIdx = s.lastIndexOf(s[i])
        last = Math.max(lastIdx, last)

        if (i === last) {
            res.push(i - left + 1)
            left = i + 1
        }
    }
    return res;
};