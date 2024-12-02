/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const array = sentence.split(" ")

    for (let i = 0; i<array.length;i++) {
        const word = array[i]
        if (word.startsWith(searchWord)) {
            return i +1 
        }
    }
    return -1
};