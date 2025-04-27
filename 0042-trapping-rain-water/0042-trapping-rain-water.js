/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height == null || height.length === 0) return 0;
    let res = 0;
    let l = height.length;
    let lMax = {};
    let rMax = {};

    lMax[0] = height[0];
    for (let i = 1; i < l; i++) {
        lMax[i] = Math.max(height[i], lMax[i - 1]);
    }

    rMax[l - 1] = height[l - 1];
    for (let i = l - 2; i >= 0; i--) {
        rMax[i] = Math.max(height[i], rMax[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        res += Math.min(lMax[i], rMax[i]) - height[i];
    }

    return res;
};
// ALT SOLUTIONS
// https://leetcode.com/problems/trapping-rain-water/solutions/400555/clean-javascript-solutions-brute-force-dynamic-programming-stack-two-pointers/?envType=daily-question&envId=2024-04-12