/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    // we need to keep track of each val
    // we need to count to get a max len
    let hash = {}

    /**
    2: [T,T,T,T,T,T]
    5: [t,f,f,f,f,f]
    1: [f,T,f,f,f,f]
    6: [f,f,T,f,f,f]
    4: [f,f,f,T,f,f]
     */
    const set = new Set()
    for (let i = 0; i < tops.length; i++) {
        const topVal = tops[i]
        const botVal = bottoms[i]

        if (!(topVal in hash)) {
            hash[topVal] = new Array(tops.length).fill('')
        }
        if (!(botVal in hash)) {
            hash[botVal] = new Array(tops.length).fill('')
        }
        set.add(topVal)
        set.add(botVal)
        hash[topVal][i] += 't'
        hash[botVal][i] += 'b'
    }
    let res = -1;
    let arrRes = []
    set.forEach((num) => {
        const arr = hash[num].find((val) => val === "")
        if (arr !== ''){
            arrRes = hash[num]
        }
    })
    let countT = 0
    let countB = 0
    for (const char of arrRes) {
        if (char === 't') {
            countT++
        }
        if (char === 'b') {
            countB++
        }
    }
    if (arrRes.length == 0) return res
    return Math.min(countB, countT)
};