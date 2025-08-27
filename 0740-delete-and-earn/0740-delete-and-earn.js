/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const set = new Set();
    const map = new Map();

    for (const num of nums) {
        if (!set.has(num)) {
            set.add(num)
            map.set(num,  0)
        }
        map.set(num, map.get(num) + num)
    }

    const uniq = [...set].sort((a,b) => a - b)

    let take = 0;
    let skip = 0;
    let prev = null;
    
    for (const currNum of uniq) {
        const currPoints = map.get(currNum);
        const maxPrev = Math.max(take, skip)

        if (prev === currNum - 1) {
            take = currPoints + skip
            skip = maxPrev;
        } else {
            take = currPoints + maxPrev;
            skip = maxPrev
        }
        prev = currNum
    }
    return Math.max(take, skip)
};