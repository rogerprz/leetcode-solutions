/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function (s, words) {
    const bold = new Array(s.length).fill(false)
    // s = "abcxyz123", 
    // words = ["abc","123"]
    for (const word of words) {
        let start = s.indexOf(word);

        while (start > -1) {
            const end = start + word.length;
            for (let i = start; i < end; i++) {
                bold[i] = true;
            }
            start = s.indexOf(word, start + 1)
        }
    }
    const res = [];

    for (let i = 0; i < s.length;i++) {
        if (i === 0 && bold[i]) {
            res.push('<b>')
        }
        else if (bold[i] && !bold[i-1]) {
            res.push('<b>')
        }
        res.push(s[i])
        if (bold[i] && i === s.length -1){
            res.push('</b>')
        }
        else if (bold[i] && !bold[i+1]) {
            res.push('</b>')
        }
    }
    return res.join("")
};