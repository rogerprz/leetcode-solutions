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

    for (const topIdx of l1) {
        for (const idx of l2) {
            min = Math.min(min, Math.abs(topIdx - idx))
        }
    }
    return min
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */