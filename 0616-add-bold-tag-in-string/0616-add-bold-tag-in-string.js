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
    const openTag = '<b>';
    const closeTag = '</b>'
    for (let i = 0; i < s.length;i++) {
        if (bold[i]){
            if (i === 0 || !bold[i-1]) {
                res.push(openTag)
            }
        }
        res.push(s[i])
        if (bold[i]){
            if (i === s.length -1 || !bold[i+1]){
                res.push(closeTag)
            }
        }
    }
    return res.join("")
};