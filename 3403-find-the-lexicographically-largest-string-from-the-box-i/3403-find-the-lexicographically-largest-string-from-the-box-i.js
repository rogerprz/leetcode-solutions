/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if (numFriends === 1) return word;

    let N = word.length;
    let res = '';

    for (let i = 0; i < N; i++) {

        const maxLenOfSubStr = Math.min(i + N - numFriends + 1, N)
        const subStr = word.substring(i, maxLenOfSubStr)

        if (subStr > res) {
            res = subStr
        }
    }
    return res;
};