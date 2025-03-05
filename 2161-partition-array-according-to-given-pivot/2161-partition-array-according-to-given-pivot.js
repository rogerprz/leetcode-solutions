/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let count = 0;
    let less = []
    let great = []
    let arr = new Array(nums.length).fill(0)
    for (const num of nums) {
        if (num === pivot) count++
        else if (pivot < num) {
            great.push(num)
        } else {
            less.push(num)
        }
    }
    let i = 0;

    while (i < less.length) {
        arr[i] = less[i]
        i++
    }

    while (i < less.length + count) {
        arr[i] = pivot
        i++
    }
    let pos = 0
    while (i < less.length + great.length + count) {
        arr[i] = great[pos]
        i++
        pos++
    }

    return less.concat(new Array(count).fill(pivot), great)
};