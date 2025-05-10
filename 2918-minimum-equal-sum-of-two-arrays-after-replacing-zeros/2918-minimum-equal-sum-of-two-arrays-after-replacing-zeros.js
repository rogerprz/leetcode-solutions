/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var minSum = function(nums1, nums2) {
    let sum1 = 0;
    let sum2 = 0;
    let hasZero1 = false;
    let hasZero2 = false;


    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            sum1++;
            hasZero1 = true;
        } else {
            sum1 += nums1[i];
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] === 0) {
            sum2++;
            hasZero2 = true;
        } else {
            sum2 += nums2[i];
        }
    }
    if (sum1 > sum2 && !hasZero2) {
        return -1;
    }

    if (sum2 > sum1 && !hasZero1) {
        return -1;
    }

    return Math.max(sum1, sum2);
};