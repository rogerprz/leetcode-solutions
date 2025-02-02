/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let s1 = 0;
    let count = 0
    for (let i = 0; i < t.length;i++) {
        const char = t[i]
        const sChar = s[s1]
        if (s1 === s.length) break
        if (char == sChar) {
            count++ 
            s1++
        }
    }
    return s.length === count
};