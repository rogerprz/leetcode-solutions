/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    let left = 0;
    for (let i = 1; i < nums.length;i++) {
        const num = nums[i];
        // [2,4,1,1,6,5]
        //    l i r
        if (num === nums[i+1]) continue
        const isHill = num > nums[left] && num > nums[i+1]
        const isValley = num < nums[left] && num < nums[i+1]


        
        if (isHill || isValley){
             count++
             left = i
        }
    }
    return count;
};