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
        const currPoints = map.get(currNum)
        const prevPoints = Math.max(skip, take)

        if (currNum - 1 === prev) {
            take = currPoints + skip 
            skip = prevPoints
        } else {
            take = currPoints +  prevPoints 
            skip = prevPoints
        }
        prev = currNum
    }

    return Math.max(take, skip)
};