/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const map = new Map();
    const set = new Set();

    for (const num of nums) {
        if (!set.has(num)) {
            map.set(num, 0)
            set.add(num)
        }
        map.set(num, map.get(num) + num)
        set.add(num)
    }

    const uniq = [...set].sort((a,b) => a-b)

    let take = 0;
    let skip = 0;
    let prev = null;

    for (let i = 0; i < uniq.length;i++) {
        const curr = uniq[i]
        const currPoints = map.get(curr);
        const maxPrev = Math.max(take, skip)

        if (curr - 1 === prev) {
            // curr == prev 
            take = currPoints + skip;
            skip = maxPrev;
        } else {
            take = currPoints + maxPrev;
            skip = maxPrev
        }
        prev = curr
    }
    return Math.max(take, skip)
};