/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    const set = new Set(bannedWords)
    let count = 0;

    for (const word of message) {
        if (set.has(word)) {
            count++
        }
        if (count === 2) {
           return true
        }
    }
    return false
};