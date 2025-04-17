/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freqHash = {}

    for (const char of s) {
        if (!(char in freqHash)) {
            freqHash[char] = 0
        }
        freqHash[char]++
    }

    const freqArr = [...Object.keys(freqHash).sort((a,b) => freqHash[b]- freqHash[a])]
    let res = ""

    while (freqArr.length >= 2) {
        const one = freqArr.shift()
        const two = freqArr.shift()

        res+= one 
        res+= two

        if (--freqHash[one] > 0) freqArr.push(one)
        if (--freqHash[two] > 0) freqArr.push(two)

        freqArr.sort((a,b) => freqHash[b]- freqHash[a])
    }

    if (freqArr.length > 0) {
        if (freqHash[freqArr[0]] > 1) {
            return ""
        }
        res += freqArr[0]
    }

    return res
};