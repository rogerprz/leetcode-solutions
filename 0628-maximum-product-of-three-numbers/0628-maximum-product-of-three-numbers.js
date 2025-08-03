/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function(nums) {
    let minA = Infinity;
    let minB = Infinity;
    let minC = Infinity;

    let maxA = -Infinity;
    let maxB = -Infinity;
    let maxC = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cur <= minA) {
            minC = minB;
            minB = minA;
            minA = cur;
        } else if (cur <= minB ) {
            minC = minB;
            minB = cur;

        } else if (cur <= minC) {
            minC = cur;
        }

        if (cur >= maxA) {
            maxC = maxB;
            maxB = maxA;
            maxA = cur;
        } else if (cur >= maxB) {
            maxC = maxB;
            maxB = cur;
        } else if (cur >= maxC) {
            maxC = cur;
        }

    }

    const minPrd = minA * minB * maxA;
    const maxPrd = maxA * maxB * maxC;

    return Math.max(minPrd, maxPrd);
};