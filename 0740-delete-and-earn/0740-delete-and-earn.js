/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const set = new Set();
    const map = new Map()

    for (let i = 0; i < nums.length;i++) {
        const num = nums[i]
        if (!set.has(num)) {
            map.set(num, 0)
            set.add(num)
        }
        const prevNum = map.get(num) + num
        map.set(num, prevNum)
    }

    const uniq = [...set].sort((a,b) => a - b);
    let take = 0;    // 3
    let skip = 0;    // 2
    let prev = null; // 3
    // [2,3,4]

    for (const num of uniq) {
        const currPoints = map.get(num) // 4
        const maxPrev = Math.max(take, skip) // 3

        if (prev === num - 1) {
            take = currPoints + skip;
            skip = maxPrev;
        } else {
            take = currPoints + maxPrev;
            skip = maxPrev;
        }
        prev = num;
    }

    return Math.max(take, skip)
};