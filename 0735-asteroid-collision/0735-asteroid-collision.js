/**
 * @param {number[]} arr
 * @return {number[]}
 */
var asteroidCollision = function(arr) {
    const stack = []

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const top = stack[stack.length - 1];

        if (stack.length === 0 || top < 0 || curr > 0) {
            stack.push(curr)
        } else if (-curr === top) {
            stack.pop()
        } else if ( -top > curr) {
            stack.pop()
            i--;
        }
    }
    return stack
};