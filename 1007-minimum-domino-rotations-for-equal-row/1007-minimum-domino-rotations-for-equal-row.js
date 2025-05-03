/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let top1 = tops[0]
    let bottom1 = bottoms[0]
    let ans = -1
    let topCount = 0
    let botCount = 0;

    for(let target of [top1, bottom1]){
        topCount = 0
        botCount = 0
        for(let i=0; i<tops.length; i++){
            if(tops[i] !== target && bottoms[i] !== target){
                break
            }

            if(tops[i] !== target) topCount++
            if(bottoms[i] !== target) botCount++

            if(i === tops.length-1) ans = Math.min(topCount, botCount)
        }
    }

    return ans
};