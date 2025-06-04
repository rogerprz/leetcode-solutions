/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
    if (numFriends === 1) {
        return word;
    }
    let n = word.length;
    let res = "";
    for (let i = 0; i < n; i++) {
        let s = word.substring(i, Math.min(i + n - numFriends + 1, n));
        if (s > res) {
            res = s;
        }
    }
    return res;
};