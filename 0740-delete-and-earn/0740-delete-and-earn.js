/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const set = new Set()
    const freq = {}

    for (const num of nums) {
        if (!(set.has(num))) {
            freq[num] = 0
            set.add(num)
        }
        freq[num] += num
    }

    const uniq = [...set].sort((a,b) => a - b);
    let take = 0;
    let skip = 0
    let prev = null;
    for (const num of uniq) {
        const currPoints = freq[num];

        const maxPrev = Math.max(skip, take)

        if (prev === num - 1) {
            take = currPoints + skip 
            skip = maxPrev;
        } else {
            take = currPoints + maxPrev;
            skip = maxPrev
        }
        prev = num
    }

    return Math.max(skip, take)
};