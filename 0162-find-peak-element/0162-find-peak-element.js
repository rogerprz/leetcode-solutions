/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1
    // [1,2,1,3,5,6,4]
    //  0,1,2,3,4,5,6 = 7
    //  l     m     r
    //          l m r
    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left;
};