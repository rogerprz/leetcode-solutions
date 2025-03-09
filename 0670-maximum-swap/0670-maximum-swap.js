/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const nums = num.toString().split("").map(char => Number(char))
    const max = Math.max(...nums)
    const largeIdx = nums.indexOf(max)
    console.log('M:', max, nums)
    let firstNum = Infinity
    let firstIdx = 0
    for (let i = 0; i < nums.length;i++) {
        const num = nums[i]
        if (num < max) {
            firstNum = num
            firstIdx = i
            break;
        }
    }
    if (num === Number(nums.join("")) && max === nums[0]) return num
    nums[firstIdx] = max 
    nums[largeIdx] = firstNum
    console.log("N:", nums)
    return Number(nums.join(""))
};