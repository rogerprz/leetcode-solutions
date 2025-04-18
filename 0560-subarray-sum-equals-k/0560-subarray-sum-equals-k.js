/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   let count = 0
   let map = new Map()
   let sum = 0;

    map.set(0,1)
    for (let i = 0; i < nums.length;i++) {
        sum += nums[i]

        if (map.get(sum-k)) {
            count += map.get(sum - k)
        }

        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
};



/**



 const map = new Map()
    let count = 0, sum = 0;

    map.set(0,1)
    for (let i = 0; i < nums.length;i++) {
        sum += nums[i]

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }

        if (map.has(sum)) {
            map.set(sum, (map.get(sum))+1);
        }
        else map.set(sum, 1);
    }
    return count;
 */