/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    const hash = {}

    for (let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i]
        if (word1 === word || word === word2) {
            if (!(word in hash)) {
                hash[word] = []
            }
            hash[word].push(i)
        }
    }

    let min = Infinity;
    // 1, 4 
    // 3
    for (const topWord of hash[word1]) { 
        for (const botWord of hash[word2]) {
            min = Math.min (Math.abs(topWord - botWord), min)
        }
    }
    return min
};