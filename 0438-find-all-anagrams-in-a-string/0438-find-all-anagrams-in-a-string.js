/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let hash = {}

    for (const char of p) {
        if (!(char in hash)){
            hash[char]= 0
        }
        hash[char]++
    }
    let P = p.length;
    let start = 0, end = 0;
    let res = [];
    while (end < s.length) {
        const endChar = s[end]
        // if end hashChar is > 0 we found a valid char
        // so we reduce len of P
        if (hash[endChar] > 0) P--;

        hash[endChar]--
        // increase endPointer
        end++
        // P = 0 then we found valid anagram, so we push
        if (P === 0) res.push(start)
        
        // check if end-start == p.len 
        if (end - start === p.length) {
            const startChar = s[start]

            if (hash[startChar] >= 0) P++
            hash[startChar]++ 
            start++
        }
    }
    return res;
};