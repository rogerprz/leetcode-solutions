/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const stack = []

    for (const num of nums) {
        let left = 0;
        let right = stack.length;
        
        while (left < right) {
            const mid = Math.floor((left + right)/ 2);
            const midStack = stack[mid]

            if (num > midStack) {
                left = mid + 1
            } else {
                right = mid
            }
        }                   
        if (left == stack.length) {
            stack.push(num)
        } else {
            stack[right] = num
        }
    }
    console.log("S:", stack)
    return stack.length
};