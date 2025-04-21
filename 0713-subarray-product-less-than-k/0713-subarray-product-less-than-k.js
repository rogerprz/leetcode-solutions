/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    let product = 1;
    let prevIdx = 0; 

    for (let i = 0; i< nums.length;i++) {
        const num = nums[i]
        product *= num 

        while(product >= k && prevIdx <= i) {
            product = Math.floor(product/nums[prevIdx++])
        }
        count += i - prevIdx + 1
    }
    return count
};