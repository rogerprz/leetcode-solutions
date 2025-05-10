/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const output = [];
    const charsHash = {};
    for (let char of p) {
        if (!(char in charsHash)) {
            charsHash[char] = 0
        }
        charsHash[char]++
    }

    let start = 0;
    let end = 0; 
    let P = p.length

    while (end < s.length) {
        const endChar = s[end]
        if (charsHash[endChar] > 0) P--;
    
        charsHash[endChar]--;
        end++;
        // found a successful anagram
        if (P === 0) output.push(start);
        // check if diff of end - start = P.len
        if (end - start == p.length) {
            const startChar = s[start]
            
            if (charsHash[startChar] >= 0) P++;
            charsHash[startChar]++;
            start++;
        }
    }
    return output;
};