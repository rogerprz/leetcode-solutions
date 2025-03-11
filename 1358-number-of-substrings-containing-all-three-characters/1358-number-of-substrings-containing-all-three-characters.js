/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const lastSeen = { a: -1, b: -1, c: -1}
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        //  abcabc
        //  012345
        //  aaacb

        lastSeen[char] = i
        const getMin = Math.min(lastSeen['a'], lastSeen['b'], lastSeen['c']);
        count += 1 + getMin
    }
    return count
}
