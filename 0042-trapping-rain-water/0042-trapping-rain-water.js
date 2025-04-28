/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, leftMax = height[0];
    let r = height.length -1;
    let rightMax = height[r]

    let sum = 0;
    // [0,1,0,2,1,0,1,3,2,1,2,1]
    while (l < r) {
        if (leftMax <= rightMax) {
            sum += leftMax - height[l]
            l++
            leftMax = Math.max(leftMax, height[l])
        } else {
            sum += rightMax - height[r]
            r--
            rightMax = Math.max(rightMax, height[r])
        }
    }
    return sum;
};