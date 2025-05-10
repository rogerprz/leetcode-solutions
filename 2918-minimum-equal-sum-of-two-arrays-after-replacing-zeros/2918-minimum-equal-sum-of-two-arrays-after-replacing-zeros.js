/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let zeroCount = 0 // 2
    let zeroCount2 = 0; // 1
    let numSum = 0;     // 6
    let numSum2 = 0     // 11
    // n1 = [3,2,0,1,0], 
    // n2 = [6,5,0]
    for (const num of nums1) {
        if (num === 0) {
            zeroCount++
            numSum++
        }
        else numSum += num
    }
    for (const num of nums2) {
        if (num === 0) {
            zeroCount2++
            numSum2++
        }
        else numSum2 += num
    }
    if (numSum > numSum2 && zeroCount2 === 0) {
        return -1
    }
    if (numSum2 > numSum && zeroCount === 0) {
        return -1
    }
    return Math.max(numSum, numSum2)
};