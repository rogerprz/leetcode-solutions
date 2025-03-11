/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    // Convert the number to a string array
    let nums = num.toString().split('');
    
    // Track the last occurrence of each digit
    let last = new Array(10).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        const num = parseInt(nums[i])
        last[num] = i;
    }

    // Traverse the digits from left to right
    for (let i = 0; i < nums.length; i++) {
        // Check if a larger digit can be swapped later
        for (let d = 9; d > nums[i]; d--) {
            const largestNum = last[d]
            // we check that the idx/location of the largest
            // can we swapped with current location
            if (largestNum > i) {
                // Swap the digits and return the new number
                [nums[i], nums[largestNum]] = [nums[largestNum], nums[i]];
                return parseInt(nums.join(''));
            }
        }
    }
    
    // Return the original number if no swap was performed
    return num;
};