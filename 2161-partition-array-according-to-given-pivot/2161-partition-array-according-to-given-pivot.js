/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let count = 0;
    let less = []
    let great = []

    for (const num of nums) {
        if (num === pivot) count++
        else if (pivot < num) {
            great.push(num)
        } else {
            less.push(num)
        }
    }
    // const pivots = 
    return [...less, ...new Array(count).fill(pivot), ...great]
};