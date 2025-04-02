/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    // The value of a triplet of indices 
    // (i, j, k) === (nums[i] - nums[j]) * nums[k]
    // [12,6,1,2,7]
    // [ 0,1,2,3,4]
    //   i,j,    k
    //  (   12 - 1)        * 7
    // (nums[i] - nums[j]) * nums[k]

    let p1 = 0;
    let p3 = 2;
    let max = 0;
    let diff = 0;

    for (let i = 0; i < nums.length;i++) {
        for (let j = i +1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const total = (nums[i] - nums[j]) * nums[k]
                max = Math.max(total, max)
            }
        }
 
    }
    return max
};