/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    // create an freqCount alphabet array containing 26 0 values
    const maxFreqCount = new Array(26).fill(0)
    const aCharCode = 'a'.charCodeAt(0)
    // then we do a for loop for the larger words2 
    for (const word of words2) {
    // inside the loop we need to track temporary
        const tempFreqCount = new Array(26).fill(0)
    // freq count for chars 
        for (const char of word) {
            // currentChar value - aCharCode 97?
            tempFreqCount[char.charCodeAt(0) - aCharCode]++
        }
        
        for (let i = 0; i< 26; i++) {
            maxFreqCount[i] = Math.max(maxFreqCount[i], tempFreqCount[i])
        }
    }
    const results = []

    // We need to loop through the main words1 
    for (const word of words1) {
        const mainFreqCount = new Array(26).fill(0)
        // We need to only loop until we don't find the char in the subset, we break
        for (const char of word) {
            mainFreqCount[char.charCodeAt(0) - aCharCode]++
        }

        let isValid = true
        for (let i = 0; i<26; i++) {
            if (maxFreqCount[i] > mainFreqCount[i]) {
                isValid = false
                break;
            }
        }
        if (isValid) {
            results.push(word)
        }
    }
    // In that loop we need to do another tempChar arra
    return results
};