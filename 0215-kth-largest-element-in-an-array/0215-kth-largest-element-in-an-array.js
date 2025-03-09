/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)

    const array = Array.from({ length: max - min + 1 }, ()=> 0)
    console.log("M:", min, max, array)
    for (const num of nums) {
        const idx = num - min
        array[idx]++
    }
    console.log("A:", array)
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === 0) continue

        k -= array[i]
        array[i] = 0 

        if (k <= 0) {
            return i + min
        }
    }
    return 0
};