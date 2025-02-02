/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const maxFreqCount = new Array(26).fill(0)

    for (const word of words2) {
        const tempFreq = new Array(26).fill(0)

        for (const char of word) {
            tempFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        for (let i = 0; i < 26; i++) {
            maxFreqCount[i] = Math.max(tempFreq[i], maxFreqCount[i])
        }
    }

    const res = []

    for (const word of words1) {
        const tempFreq = new Array(26).fill(0)

        let isValid = true; 
        for (const char of word) {
            tempFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        
        for (let i = 0; i< 26; i++) {
            if (maxFreqCount[i] > tempFreq[i]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            res.push(word)
        }
    }

    return res
};