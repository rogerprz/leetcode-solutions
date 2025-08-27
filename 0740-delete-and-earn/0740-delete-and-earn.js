/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const set = new Set()
    const map = new Map()

    for (const num of nums ) {
        if (!set.has(num)) {
            set.add(num)
            map.set(num, 0)
        }

        map.set(num, map.get(num) + num)
    }

    const uniq = [...set].sort((a,b) => a - b)

    let take = 0;
    let skip = 0;
    let prev = 0;

    for (const currNum of uniq) {
        const maxPoints = map.get(currNum)
        const prevMax = Math.max(skip, take)

        if (currNum - 1 === prev) {
            take = maxPoints + skip 
            skip = prevMax
        } else {
            take = prevMax + maxPoints
            skip = prevMax
        }
        prev = currNum
    }

    return Math.max(take, skip)
};