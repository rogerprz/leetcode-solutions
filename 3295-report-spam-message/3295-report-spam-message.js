/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let count = 0;
    const set = new Set([...bannedWords])
    message.forEach((word) =>{
        if (set.has(word)) {
            count++
        }
    })

    return count >= 2 ? true : false
};