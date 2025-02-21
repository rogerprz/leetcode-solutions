/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    const mark = new Array(s.length).fill(false)

    for (const word of words) {
        // word = abc
        let startIndex = s.indexOf(word)
        // "abcxyz123"
        // 0 
        while (startIndex > -1) {
            const len = startIndex + word.length;
            for (let i = startIndex; i < len; i++) {
                mark[i] = true 
            }
            startIndex = s.indexOf(word, startIndex + 1)
        }
    }

    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (mark[i] && (i === 0 || !mark[i - 1])) {
            stack.push('<b>')
        }
        stack.push(s[i])
        if (mark[i] &&  (i === s.length - 1 || !mark[i + 1])) {
            stack.push('</b>')
        }
    }
    return stack.join("")
};