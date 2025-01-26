/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function (s, words) {
    // "abcxyz123"
    // [false,...,false] = 9 len
    const bold = new Array(s.length).fill(false)
    // s = "abcxyz123", 
    // words = ["abc","123"]
    for (const word of words) {
        let start = s.indexOf(word); // 0 index

        while (start > -1) {
            // end of the word length 0 + 3 
            const end = start + word.length; 
            for (let i = start; i < end; i++) {
                // replacing false with true based on len
                bold[i] = true;
            }
            // we check for the next word in the string
            //  abcxyzabc123
            //  check, then index of 6 for next abc
            start = s.indexOf(word, start + 1)
        }
    }
    const res = [];
    const openTag = '<b>';
    const closeTag = '</b>'

    for (let i = 0; i < s.length;i++) {
        if (bold[i] && (i === 0 || !bold[i-1])){
             res.push(openTag)
        }
        res.push(s[i])
        if (bold[i] && (i === s.length -1 || !bold[i+1])){
            res.push(closeTag)
        }
    }
    return res.join("")
};