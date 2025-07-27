/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    let left = 0;

    for (let i = 1; i < nums.length - 1;i++) {
        if (nums[i] !== nums[i+1]) {
            const currentIsHill = nums[i] > nums[left] && nums[i] > nums[i + 1]
            const currentIsValley = nums[i] < nums[left] && nums[i] < nums[i + 1]
            if (currentIsHill || currentIsValley) {
                count++
            }
            left = i
        }
    }

    return count
};