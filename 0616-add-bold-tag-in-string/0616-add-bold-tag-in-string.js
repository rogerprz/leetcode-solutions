/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    const mark = Array.from({length: s.length}, ()=> false)

    for (const word of words) {
        let startIdx = s.indexOf(word)
        while (startIdx > -1) {
            let end = startIdx + word.length;
            for (let i = startIdx; i < end; i++) {
                mark[i] = true
            }
            startIdx = s.indexOf(word, startIdx + 1)
        }
    }
    
    const result = []
    const openTag = '<b>', closeTag = '</b>'

    for (let i = 0; i < s.length;i++) {
        if (mark[i] && (i === 0 || !mark[i - 1])) {
            result.push(openTag)
        }
        result.push(s[i])
        if (mark[i] && (i === s.length-1 || !mark[i + 1])) {
            result.push(closeTag)
        }
    }

    return result.join("")
};