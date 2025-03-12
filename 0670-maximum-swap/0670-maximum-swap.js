/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const nums = num.toString().split("")

    const digits = new Array(10).fill(-1)
    for (let i = 0; i < nums.length;i++) {
        const n = parseInt(nums[i])
        digits[n] = i
    }

    for (let i = 0; i < nums.length; i++) {
        for (let d = 9; d > nums[i]; d--) {
            const numFromEnd = digits[d]

            if (numFromEnd > i) {
                [nums[i], nums[numFromEnd]] = [nums[numFromEnd], nums[i]]
                return parseInt(nums.join(""))
            }
        }
    }
    return num
};