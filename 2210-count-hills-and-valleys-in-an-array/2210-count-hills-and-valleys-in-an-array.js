/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let res = 0; 
    const N = nums.length;

    for (let i = 1; i < N - 1; i++) {
        if (nums[i] === nums[i-1]) {
            // de-dupe
            continue
        }
        let left = 0; 
        for (let j = i - 1; j >=0;j--) {
            if (nums[j] > nums[i]) {
                left = 1;
                break;
            } else if (nums[j] < nums[i]) {
                left = -1;
                break;
            }
        }
        let right = 0;
        for (let j = i + 1; j < N;j++) {
            if (nums[j] > nums[i]) {
                right = 1;
                break;
            } else if (nums[j] < nums[i]) {
                right = -1;
                break;
            }
        }
        if (left === right && left !== 0) {
            // at this time, index i is part of a peak or valley.
            ++res;
        }
    }
    return res
};