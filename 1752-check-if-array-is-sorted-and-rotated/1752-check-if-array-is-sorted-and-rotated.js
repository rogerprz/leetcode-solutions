/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let n = nums.length - 1
    let count = 0;
    if (nums[0] < nums[n]) {
        count++;
    }
    for (let i = 0; i< n;i++) {
        if (nums[i] > nums[i+1]) {
            count++
        }
        if (count > 1) return false 
    }
    return true
};