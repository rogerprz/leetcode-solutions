/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // only positive numbers
    for (let i = 1; i < nums.length;i++) {
        if (nums[i] === nums[i-1]) {
            nums[i-1] *= 2
            nums[i] = 0
        }
    }
    
    for(let i = 0, j = 0; i < nums.length;i++){
        if (nums[i] != 0){
            [nums[j], nums[i]] = [nums[i],nums[j]]
            j++
        }
    }
    return nums
};