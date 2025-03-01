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
    
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            j++
        }
    }
    const len = nums.length 
    const less = nums.filter((num) => {
        if (num > 0) return num
    })
    const result = [...less, ...(new Array(len - less.length).fill(0))]
    return nums
};