/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let anagram = {}

    for (let char of p) {
        if (!(char in anagram)) {
            anagram[char] = 0
        }
        anagram[char]++
    }

    let P = p.length;
    let res = []
    let start = 0;
    let end = 0;
    // s = "cbaebabacd", 
    // p = "abc"
    while (end < s.length) {
        const endChar = s[end]
        if (anagram[endChar] > 0) P--;
        anagram[endChar]--
        end++
        if (P === 0) res.push(start)

        if (end - start === p.length) {
            const startChar = s[start]

            if (anagram[startChar] >= 0) P++;
            anagram[startChar]++
            start++
        }

    }
    return res;
};