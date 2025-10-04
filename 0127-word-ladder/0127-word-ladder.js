/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const Len = beginWord.length;

    const comboList = {}

    for (const word of wordList) {
        for (let i = 0; i < Len;i++ ) {
            const wild = word.substring(0,i) + "*" + word.substring(i + 1, Len)
            if (!(wild in comboList)) {
                comboList[wild] = []
            }
            comboList[wild].push(word)
        }
    }

    const queue = [[beginWord, 1]]
    const visited = new Set();
    visited.add(beginWord)

    while (queue.length > 0) {
        const [word, level] = queue.shift();
        for (let i = 0; i < Len;i++) {
            const wildWord = word.substring(0, i) + "*" + word.substring(i + 1, Len)
            for (let adjacentWord of comboList[wildWord] || []) {

                if (adjacentWord === endWord) return level + 1;
                if (!visited.has(adjacentWord)) {
                    visited.add(adjacentWord)
                    queue.push([adjacentWord, level + 1])
                }
            }
        }
    }
    return 0;
};