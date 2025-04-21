/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    let prod = 1;
    let leftIdx = 0;

    for (let i = 0; i < nums.length;i++) {
        const num = nums[i];
        // [10,5,2,6]
        //  10,50,100
        prod *= num;

        while (prod >= k && leftIdx <= i) {
            prod = Math.floor(prod/nums[leftIdx++])
        }

        count += i - leftIdx + 1
    }
    return count
};