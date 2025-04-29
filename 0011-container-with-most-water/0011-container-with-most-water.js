/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0
    let width = 0
    // [1,8,6,2,5,4,8,3,7] 9
    while (left < right) {
        const lHeight = height[left]
        const rHeight = height[right]
        width = right - left
        const minHeight = Math.min(lHeight, rHeight)

        max = Math.max(max, minHeight * width)
        if (lHeight > rHeight){
            right--
        } else {
             left++
        }

    }
    return max
};