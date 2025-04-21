/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const hash = {}
    let count = 0;
    for (const char of s) {
        if (!(char in hash)) {
            hash[char] = 0
        }
        hash[char]++
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];

        if (!(char in hash) || hash[char] === 0) {
            count++
        } else {
            hash[char]--
        }
    }
    return count
};