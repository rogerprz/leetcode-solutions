/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    let count = 0, sum = 0;

    map.set(0,1)
    for (let i = 0; i < nums.length;i++) {
        sum += nums[i]

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count;
};
/**
var subarraySum = function(nums, k) {
    let subNum = { 0: 1 };
    let total = 0, count = 0;

    for (const n of nums) {
        total += n;

        if (subNum[total - k] !== undefined) {
            count += subNum[total - k];
        }

        subNum[total] = (subNum[total] || 0) + 1;
    }

    return count;    
};
 */