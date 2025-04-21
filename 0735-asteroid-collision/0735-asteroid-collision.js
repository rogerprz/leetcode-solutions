/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let i =0; i< asteroids.length; i++) {
        const top = stack[stack.length -1]
        const curr = asteroids[i]

        if (stack.length === 0 || top < 0 || curr > 0) {
            stack.push(curr)
        } else if (-curr === top) {
            stack.pop()
        } 
        else if (-top > curr) {
            stack.pop()
            i--
        }
    }
    return stack;
};