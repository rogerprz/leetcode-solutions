/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // only positive numbers
    for (let i = 1; i < nums.length;i++) {
        const curr = nums[i]
        const prev = nums[i-1]

    // If nums[i] == nums[i + 1], then multiply nums[i] by 2
        if (curr === prev) {
            nums[i-1] *= 2
            // set nums[i + 1] to 0
            nums[i] = 0
        }
    }
    
    let l = 0; 
    let r = 1
    // while (r < nums.length) {
    //     const start = nums[l];
    //     const end = nums[r]
    //     // [1,0,2,0,0,1]
    //     //    l r 
    //     if (end === 0) {
    //         r++
    //     }      
    //     else if (start === 0) {
    //         [nums[l],nums[r]] = [nums[r],nums[l]]
    //         l++
    //         r++
    //     } 
    //     else {
    //         l++
    //     }
    // }
    const len = nums.length 
    const less = nums.filter((num) => {
        if (num > 0) return num
    })

    return [...less, ...(new Array(len - less.length).fill(0))]
};