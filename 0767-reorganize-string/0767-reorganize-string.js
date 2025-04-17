/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freqHash = {}

    for (const char of s) {
        if (!(char in freqHash)) {
            freqHash[char] = 0;
        }
        freqHash[char]++
    }
    //  "aab"
    //  hash = {a: 2, b: 1}
    let freq = [...Object.keys(freqHash).sort((a,b) => freqHash[b] - freqHash[a])]
    // [a,b]
    let res = ""

    while (freq.length >= 2) {
        const one = freq.shift();
        const two = freq.shift();


        res += one;
        res += two;

        if (--freqHash[one] > 0) freq.push(one);
        if (--freqHash[two] > 0) freq.push(two);

        freq.sort((a,b) => freqHash[b] - freqHash[a])
    }
    if (freq.length > 0) {
        const val = freq.shift()
        if (freqHash[val] > 1) {
            return ""
        }
        res += val
    }

    return res;
};