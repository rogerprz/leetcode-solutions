/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[0];
    let rightMax = height[r];
    let sum = 0;
    while (l < r){
        if(leftMax <= rightMax){
            sum += leftMax - height[l];
            l++;
           leftMax = Math.max(leftMax, height[l]);

        }else{
            sum += (rightMax - height[r] );
            r--;
            rightMax = Math.max(rightMax, height[r])
        }
    }
    return sum
};
// ALT SOLUTIONS
// https://leetcode.com/problems/trapping-rain-water/solutions/400555/clean-javascript-solutions-brute-force-dynamic-programming-stack-two-pointers/?envType=daily-question&envId=2024-04-12