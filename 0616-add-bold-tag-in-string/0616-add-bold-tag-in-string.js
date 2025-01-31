/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    // keep track of which chars need to be bolded
    const mark = Array.from({length: s.length}, ()=> false)
    // mark chars as bold

    for (const word of words) {
        let start = s.indexOf(word)

        while (start > -1) {
            const end = start + word.length
            for (let i = start; i < end;i++) {
                mark[i] = true
            }
            start = s.indexOf(word, start + 1)
        }
    }

    let res = [];
    const openTag = "<b>";
    const closeTag = "</b>";

    for (let i = 0; i < s.length;i++) {
        if (mark[i]) {
            if (i=== 0 || !mark[i-1]) {
                res.push(openTag)
            }
        }
        res.push(s[i])

        if (mark[i]) {
            if (i=== s.length-1 || !mark[i+1]) {
                res.push(closeTag)
            }
        }
    }

    return res.join('')
};