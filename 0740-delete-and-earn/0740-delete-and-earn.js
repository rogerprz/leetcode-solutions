/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const freq = {}
    const set = new Set();
    for (const num of nums) {
        if (!(num in freq)) {
            freq[num] = 0
            set.add(num)
        }
        freq[num] += num
    }
    const unique = [...set].sort((a,b) => a-b)
    let take = 0     // 0 -> 4 -> 9 -> 13
    let skip = 0;    // 0 -> 0 -> 4 -> 9
    let prev = null; // n -> 2 -> 3
    // 2: 4
    // 3: 9
    // 4: 4
    // [2,2,3,3,3,4]
    // uniq: 2,3,4
    for (const num of unique) {
        const currPoints = freq[num] // 2:4, 3:9, 4:4
                            // maxPrev: 0 -> 4 -> 9
        const maxPrev = Math.max(take, skip)
        // f, t, 
        if (prev === num - 1) {
            take = currPoints + skip;
            skip = maxPrev
        } else {
            take = currPoints + maxPrev;
            skip = maxPrev
        }
        prev = num;
    }

    return Math.max(take, skip)
};