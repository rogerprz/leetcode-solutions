/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l]
    let rightMax = height[r]
    let sum = 0;
    while (l < r) {
        if (leftMax <= rightMax) {
            sum += leftMax - height[l]
            l++;
            leftMax = Math.max(leftMax, height[l])
        } else {
            sum += rightMax - height[r]
            r--;
            rightMax = Math.max(rightMax, height[r])
        }
    }

    return sum;
};