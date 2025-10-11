/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.words = wordsDict;
    this.list = new Map()

    for (let i = 0; i < wordsDict.length;i++) {
        const word = wordsDict[i]
        if (!this.list.has(word)) {
            this.list.set(word,[])
        }
        this.list.get(word).push(i)
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let res = []
    let min = Infinity
    const l1 = this.list.get(word1)
    const l2 = this.list.get(word2)

    let p1 = 0;
    let p2 = 0;

    while (p1 < l1.length && p2 < l2.length) {
        const w1 = l1[p1]
        const w2 = l2[p2]
        min = Math.min(min, Math.abs(w1-w2))

        if (w1 < w2) p1++
        else p2++
    }
    return min
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */