/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stack = []
    let max = 0
    for (const char of s) {
        if ((stack.includes(char))){
            const index = stack.indexOf(char)
            stack = stack.slice(index+1)
            stack.push(char)
        } else {
             stack.push(char)
        }
        max = Math.max(stack.length, max)
    }
    return max
};